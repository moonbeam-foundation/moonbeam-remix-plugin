import Web3 from 'web3';
import { AbiItem, hexToNumber } from 'web3-utils';
import { TransactionConfig, TransactionReceipt } from 'web3-core';
import detectEthereumProvider from '@metamask/detect-provider';
import { ERC20ABI as erc20 } from './erc20Abi';

type Address = string;
interface Network {
	provider: string;
	blockscout?: string;
}

export const NETWORKS: { [key: string]: Network } = {
	'Moonbase Alpha': {
		provider: 'https://rpc.testnet.moonbeam.network',
		// blockscout: 'https://explorer.celo.org',
	},
	'Moonbeam Standalone': {
		provider: 'http://127.0.0.1:9933',
	},
};

export const NETWORKS_BY_IDS: { [key: string]: { name: string; url: string } } = {
	'1287': {
		name: 'Moonbase Alpha',
		url: 'https://rpc.testnet.moonbeam.network',
	},
	'1281': {
		name: 'Moonbeam Standalone',
		url: 'http://127.0.0.1:9933',
	},
};

export const networkName = (networkId: number): string => {
	if (NETWORKS_BY_IDS[networkId]) {
		return NETWORKS_BY_IDS[networkId].name;
	}
	return 'Not Moonbeam';
};

export const ERC20ABI: AbiItem[] = erc20;

export class MoonbeamLib {
	public isConnected = false;

	public isMoonbeamNetwork = false;

	public web3: Web3;

	private network: Network;

	public contracts: any = {
		erc20: null,
	};

	constructor(network: Network) {
		this.network = network;
		// this.kit = newKit(this.network.provider);
		this.web3 = new Web3(network.provider);
		this.contracts.erc20 = new this.web3.eth.Contract(ERC20ABI);
	}

	async getTotalBalance(address: string) {
		return this.web3.eth.getBalance(address);
	}

	async connectMetaMask(
		onAccountsChanged: (accounts: Address[]) => void,
		onNetworkChanged: (networkId: number) => void
	) {
		if ((window as { [key: string]: any }).ethereum) {
			console.log('Last updated: 04/22/21');
			const { ethereum } = window as { [key: string]: any };
			const provider: any = await detectEthereumProvider({ mustBeMetaMask: true });
			if (provider && provider.isMetaMask) {
				// Enable MetaMask accounts
				const accountsRead = await ethereum.request({ method: 'eth_requestAccounts' });

				const web3 = new Web3(provider);
				this.web3 = web3;

				if (onAccountsChanged) {
					onAccountsChanged(accountsRead);
					ethereum.on('accountsChanged', (accounts: string[]) => {
						console.log('accountsChanged', accounts);
						onAccountsChanged(accounts);
					});

					ethereum.on('chainChanged', (chainId: string) => {
						console.log('chainChanged', chainId, hexToNumber(chainId));
						onNetworkChanged(Number(chainId));
						// Handle the new chain.
						// Correctly handling chain changes can be complicated.
						// We recommend reloading the page unless you have good reason not to.
						window.location.reload();
					});
				}
				this.isConnected = true;
			} else {
				throw new Error('other ethereum wallet did not support.');
			}
		}
		// console.log('net id', await this.web3.eth.net.getId());
		const networkId = await this.web3.eth.net.getId();
		if (NETWORKS_BY_IDS[networkId]) {
			this.isMoonbeamNetwork = true;
			this.network = { provider: NETWORKS_BY_IDS[networkId].url };
		}
		return { isConnected: this.isConnected, networkId };
	}

	async getAccounts(): Promise<Address[]> {
		return this.web3.eth.getAccounts();
	}

	async sendTransaction(
		web3Tx: TransactionConfig,
		errCb: (errorMessage: string) => void
	): Promise<TransactionReceipt | undefined> {
		try {
			return await this.web3.eth.sendTransaction(web3Tx);
		} catch (error) {
			console.log(Object.keys(error));
			console.log('he', error, 'ho');
			console.log('he', error.message, 'ho');
			errCb(error.message);
			return undefined;
		}
	}
}
