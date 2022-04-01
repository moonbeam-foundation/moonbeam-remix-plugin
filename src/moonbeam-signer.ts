import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { TransactionConfig, TransactionReceipt } from 'web3-core';
import detectEthereumProvider from '@metamask/detect-provider';
import { ERC20ABI as erc20 } from './erc20Abi';

type Address = string;
interface Network {
	provider: string;
	explorer?: string;
}

export const NETWORKS: { [key: string]: Network } = {
	'Moonbase Alpha': {
		provider: 'https://rpc.api.moonbase.moonbeam.network',
		explorer: 'https://moonbase.moonscan.io',
	},
	Moonriver: {
		provider: 'https://rpc.api.moonriver.moonbeam.network',
		explorer: 'https://moonriver.moonscan.io',
	},
	Moonbeam: {
		provider: 'https://rpc.api.moonbeam.network',
		explorer: 'https://moonbeam.moonscan.io',
	},
	'Moonbeam Dev': {
		provider: 'http://127.0.0.1:9933',
	},
	'Moonbase Local': {
		provider: 'http://127.0.0.1:9933',
	},
};

export interface NetworkById {
	[key: string]: { name: string };
}

export const NETWORKS_BY_IDS: NetworkById = {
	'1287': {
		name: 'Moonbase Alpha',
	},
	'1285': {
		name: 'Moonriver',
	},
	'1284': {
		name: 'Moonbeam',
	},
	'1281': {
		name: 'Moonbeam Dev',
	},
	'1280': {
		name: 'Moonbase Local',
	},
};

export const networkName = (networkId: number): string => {
	if (NETWORKS_BY_IDS[networkId]) {
		return NETWORKS_BY_IDS[networkId].name;
	}
	return 'Not Moonbeam';
};

export const ERC20ABI: AbiItem[] = erc20;

const NETWORK_CONFIGS: any = {
	'Moonbase Alpha': {
		chainId: '0x507',
		chainName: 'Moonbase Alpha',
		nativeCurrency: {
			name: 'DEV',
			symbol: 'DEV',
			decimals: 18,
		},
		rpcUrls: ['https://rpc.api.moonbase.moonbeam.network'],
		blockExplorerUrls: ['https://moonbase.moonscan.io/'],
	},
	Moonriver: {
		chainId: '0x505',
		chainName: 'Moonriver',
		nativeCurrency: {
			name: 'MOVR',
			symbol: 'MOVR',
			decimals: 18,
		},
		rpcUrls: ['https://rpc.api.moonriver.moonbeam.network'],
		blockExplorerUrls: ['https://moonriver.moonscan.io/'],
	},
	Moonbeam: {
		chainId: '0x504',
		chainName: 'Moonbeam',
		nativeCurrency: {
			name: 'GLMR',
			symbol: 'GLMR',
			decimals: 18,
		},
		rpcUrls: ['https://rpc.api.moonbeam.network'],
		blockExplorerUrls: ['https://moonbeam.moonscan.io/'],
	},
};

export class MoonbeamLib {
	public isConnected = false;

	public isMoonbeamNetwork = false;

	public web3: Web3;

	public contracts: any = {
		erc20: null,
	};

	public provider: any = null;

	constructor(network: Network) {
		this.web3 = new Web3(network.provider);
		this.contracts.erc20 = new this.web3.eth.Contract(ERC20ABI);
		this.provider = this.getProvider();
	}

	async getTotalBalance(address: string): Promise<string> {
		return this.web3.eth.getBalance(address);
	}

	getProvider = async () => {
		const provider = await detectEthereumProvider({ mustBeMetaMask: true });
		return provider;
	};

	async connectMetaMask(
		onAccountsChanged: (accounts: Address[]) => void,
		onNetworkChanged: (networkId: number) => void,
		network?: string
	) {
		if ((window as { [key: string]: any }).ethereum) {
			const provider: any = await this.getProvider();
			if (provider && provider.isMetaMask) {
				try {
					// initiate web3
					const web3 = new Web3(provider);
					this.web3 = web3;

					// Enable MetaMask accounts
					const accountsRead = await provider.request({ method: 'eth_requestAccounts' });
					// const accountsRead = await web3.eth.getAccounts();

					if (network) {
						const networkConfigs = NETWORK_CONFIGS[network];
						await provider.request({
							method: 'wallet_addEthereumChain',
							params: [networkConfigs],
						});
					}

					if (onAccountsChanged) {
						onAccountsChanged(accountsRead);
						provider.on('accountsChanged', async (accounts: string[]) => {
							if (accounts.length > 0) {
								const accountsReadAgain = await provider.request({ method: 'eth_accounts' });
								onAccountsChanged(accountsReadAgain);
							} else {
								this.isConnected = false;
								window.location.reload();
							}
						});

						provider.on('chainChanged', async (chainId: string) => {
							onNetworkChanged(Number(chainId));
							await this.connectMetaMask(onAccountsChanged, onNetworkChanged);
						});
					}
					this.isConnected = true;
				} catch (e) {
					if (e.code !== 4001) {
						throw new Error(e.message);
					}
				}
			} else {
				throw new Error('Other ethereum wallet did not support.');
			}
		}
		const networkId = await this.web3.eth.net.getId();
		if (NETWORKS_BY_IDS[networkId]) {
			this.isMoonbeamNetwork = true;
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
			errCb(error.message);
			return undefined;
		}
	}
}
