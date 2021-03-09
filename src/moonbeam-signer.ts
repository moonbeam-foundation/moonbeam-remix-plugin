import Web3 from 'web3';
import { AbiItem, hexToNumber } from 'web3-utils';
import { TransactionConfig, TransactionReceipt } from 'web3-core';

// //import { newKitFromWeb3, ContractKit, newKit } from '@celo/contractkit';
// //import { Address, AbiItem, ReadOnlyWallet, TransactionResult, CeloTxReceipt } from '@celo/connect';
// import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
// import TransportWebUSB from '@ledgerhq/hw-transport-webusb';
import { ERC20ABI as erc20 } from './erc20Abi';
// // import { newLedgerWalletWithSetup } from './wallet/ledgerWallet/wallet';
// // import { newMetaMaskWalletWithSetup } from './wallet/metamask/wallet';
// // import { newDAppBrowserWalletWithSetup } from './wallet/dappbrowser/wallet';

// const BluetoothTransport = require('@ledgerhq/hw-transport-web-ble').default;
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
	// 	//public kit: ContractKit;

	public isConnected = false;

	public isMoonbeamNetwork = false;

	public web3: Web3;

	private network: Network;

	// 	private isDesktop: boolean = false;

	// 	private transport: any = null;

	// 	private wallet: ReadOnlyWallet | null = null;

	public contracts: any = {
		erc20: null,
	};

	// 	getSupport = async () => {
	// 		const celo = !!(window as { [key: string]: any }).celo;
	// 		const metamask =
	// 			(window as { [key: string]: any }).ethereum && (window as { [key: string]: any }).ethereum.isMetaMask;
	// 		const usb = await TransportWebUSB.isSupported();
	// 		const ble = await BluetoothTransport.isSupported();
	// 		return { celo, metamask, usb, ble };
	// 	};

	// 	getNetwork = (): Network => {
	// 		return this.network;
	// 	};

	constructor(network: Network) {
		this.network = network;
		// this.kit = newKit(this.network.provider);
		this.web3 = new Web3(network.provider);
		this.contracts.erc20 = new this.web3.eth.Contract(ERC20ABI);
	}

	async getTotalBalance(address: string) {
		return this.web3.eth.getBalance(address);
	}

	// 	async disconnect() {
	// 		if (this.transport) {
	// 			await this.transport.on('disconnect', () => {
	// 				this.transport = null;
	// 			});
	// 		}
	// 		this.isConnected = false;
	// 		if (localStorage) {
	// 			localStorage.setItem('CeloWebSigner', '');
	// 		}
	// 	}

	// 	async connectCelo(
	// 		// eslint-disable-next-line no-unused-vars
	// 		onChainChanged: (networkName: string) => void,
	// 		// eslint-disable-next-line no-unused-vars
	// 		onAccountsChanged: (accounts: Address[]) => void
	// 	) {
	// 		if ((window as { [key: string]: any }).celo) {
	// 			const provider: any = (window as { [key: string]: any }).celo;
	// 			if (provider.isDesktop) {
	// 				this.kit = newKit(this.network.provider);
	// 				provider.on('accountsChanged', (accounts: Array<Address>) => {
	// 					if (onAccountsChanged) {
	// 						onAccountsChanged(accounts);
	// 					}
	// 				});
	// 				provider.on('chainChanged', async (chainId: string) => {
	// 					const INDEX: any = {
	// 						'42220': { name: 'Mainnet' },
	// 						'44787': { name: 'Alfajores' },
	// 						'62320': { name: 'Baklava' },
	// 					};
	// 					if (onChainChanged) {
	// 						onChainChanged(INDEX[chainId].name);
	// 					}
	// 				});
	// 			} else if (provider.isMobile) {
	// 				const web3 = new Web3(this.network.provider);
	// 				this.wallet = await newDAppBrowserWalletWithSetup(web3, provider);
	// 				this.kit = newKitFromWeb3(web3, this.wallet);
	// 				if (onAccountsChanged) {
	// 					const accounts = this.wallet.getAccounts();
	// 					onAccountsChanged(accounts);
	// 				}
	// 				this.isConnected = true;
	// 			} else {
	// 				throw new Error('other celo wallet did not support.');
	// 			}
	// 		}
	// 		return this.isConnected;
	// 	}

	// 	// eslint-disable-next-line no-unused-vars
	// 	async reConnect(onAccountsChanged: (type: string, accounts: Address[]) => void) {
	// 		if (!this.isConnected) {
	// 			if (localStorage) {
	// 				switch (localStorage.getItem('CeloWebSigner')) {
	// 					case 'metamask':
	// 						await this.connectMetaMask(onAccountsChanged);
	// 						break;
	// 					case 'usb':
	// 						await this.connectLedgerUSB(onAccountsChanged);
	// 						break;
	// 					case 'ble':
	// 						await this.connectLedgerBLE(onAccountsChanged);
	// 						break;
	// 					default:
	// 						break;
	// 				}
	// 			}
	// 		}
	// 		return this.isConnected;
	// 	}

	async connectMetaMask(
		onAccountsChanged: (accounts: Address[]) => void,
		onNetworkChanged: (networkId: number) => void
	) {
		if ((window as { [key: string]: any }).ethereum) {
			console.log('03/09/21');
			const { ethereum } = window as { [key: string]: any }; // .ethereum;
			console.log('ethereum', ethereum);
			if (ethereum.isMetaMask) {
				await ethereum.enable();
			}
			const provider: any = await detectEthereumProvider({ mustBeMetaMask: true });
			if (provider && provider.isMetaMask) {
				const web3 = new Web3(provider);
				this.web3 = web3;
				// this.wallet = await newMetaMaskWalletWithSetup(provider, onAccountsChanged);
				// this.kit = newKitFromWeb3(web3, this.wallet);
				if (onAccountsChanged) {
					const accountsRead = await this.web3.eth.getAccounts(); // this.wallet.getAccounts();
					onAccountsChanged(accountsRead);
					// if (localStorage) {
					// 	localStorage.setItem('MoonbeamWebSigner', 'metamask');
					// }
					ethereum.on('accountsChanged', (accounts: string[]) => {
						console.log('accountsChanged', accounts);
						onAccountsChanged(accounts);
						// Handle the new accounts, or lack thereof.
						// "accounts" will always be an array, but it can be empty.
					});

					ethereum.on('chainChanged', (chainId: string) => {
						console.log('chainChanged', chainId, hexToNumber(chainId));
						// const networkId = await this.web3.eth.net.getId();
						onNetworkChanged(Number(chainId));
						// Handle the new chain.
						// Correctly handling chain changes can be complicated.
						// We recommend reloading the page unless you have good reason not to.
						// window.location.reload();
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

	// 	async connectLedgerUSB(
	// 		// eslint-disable-next-line no-unused-vars
	// 		onAccountsChanged: (type: string, accounts: Address[]) => void
	// 	) {
	// 		if (await TransportWebUSB.isSupported()) {
	// 			const transport = await TransportWebUSB.create();
	// 			await this.ledgerSetup('usb', transport, onAccountsChanged);
	// 		}
	// 		return this.isConnected;
	// 	}

	// 	async connectLedgerBLE(
	// 		// eslint-disable-next-line no-unused-vars
	// 		onAccountsChanged: (type: string, accounts: Address[]) => void
	// 	) {
	// 		if (await BluetoothTransport.isSupported()) {
	// 			const transport = await BluetoothTransport.create();
	// 			await this.ledgerSetup('ble', transport, onAccountsChanged);
	// 		}
	// 		return this.isConnected;
	// 	}

	// 	private async ledgerSetup(
	// 		type: string,
	// 		transport: any,
	// 		// eslint-disable-next-line no-unused-vars
	// 		onAccountsChanged: (_type: string, accounts: Address[]) => void
	// 	) {
	// 		this.transport = transport;
	// 		this.wallet = await newLedgerWalletWithSetup(transport);
	// 		const address = this.wallet.getAccounts();
	// 		if (address.length > 0) {
	// 			const web3 = new Web3(this.network.provider);
	// 			this.kit = newKitFromWeb3(web3, this.wallet);
	// 			if (onAccountsChanged) {
	// 				onAccountsChanged(type, address);
	// 				if (localStorage) {
	// 					localStorage.setItem('CeloWebSigner', type);
	// 				}
	// 			}
	// 			this.isConnected = true;
	// 		}
	// 	}

	// async changeNetwork(network: Network) {
	// if (!this.isDesktop) {
	// 	this.network = network;
	// 	if (this.wallet) {
	// 		const web3 = new Web3(this.network.provider);
	// 		this.kit = newKitFromWeb3(web3, this.wallet);
	// 	} else {
	// 		this.kit = newKit(this.network.provider);
	// 	}
	// }
	// this.network = network;
	// this.web3 = new Web3(network.provider);
	// }

	async getAccounts(): Promise<Address[]> {
		// if (this.isDesktop) {
		// 	const result = await this.kit.web3.eth.getAccounts();
		// 	return result;
		// }
		// return this.wallet ? this.wallet.getAccounts() : [];
		return this.web3.eth.getAccounts();
	}

	async sendTransaction(web3Tx: TransactionConfig): Promise<TransactionReceipt> {
		console.log('mmm');
		try {
			// const txResult: TransactionResult = await this.kit.sendTransaction(web3Tx);
			// return txResult.waitReceipt();
			return await this.web3.eth.sendTransaction(web3Tx);
		} catch (error) {
			console.log('he', error, 'ho');
			throw new Error(error);
		}
	}

	// 	async sign(message: string, account: Address): Promise<string | null> {
	// 		if (this.wallet) {
	// 			const result = await this.wallet.signPersonalMessage(account, this.kit.web3.utils.toHex(message));
	// 			let v = this.kit.web3.utils.hexToNumber(`0x${result.slice(130)}`);
	// 			if (v < 27) {
	// 				v += 27;
	// 			}
	// 			return result.slice(0, 130).concat(v.toString(16));
	// 		}
	// 		return null;
	// 	}

	// 	recover(message: string, signature: string): Address {
	// 		try {
	// 			const result = this.kit.web3.eth.accounts.recover(this.kit.web3.utils.toHex(message), signature);
	// 			return result;
	// 		} catch (error) {
	// 			throw new Error(error);
	// 		}
	// 	}
}
