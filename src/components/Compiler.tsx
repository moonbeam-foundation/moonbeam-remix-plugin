import React from 'react';
import { Alert, Button, Card, Form, InputGroup } from 'react-bootstrap';
import copy from 'copy-to-clipboard';
import { AbiInput, AbiItem, jsonInterfaceMethodToString } from 'web3-utils';
import type { Api } from '@remixproject/plugin-utils';
// import { Client } from '@remixproject/plugin';
import { CompilationError, CompilationResult, IRemixApi } from '@remixproject/plugin-api';
import { PluginClient } from '@remixproject/plugin';
import { createClient } from '@remixproject/plugin-webview';
// import { Celo } from '@dexfair/celo-web-signer';
import { MoonbeamLib } from '../moonbeam-signer';
import { InterfaceContract } from './Types';
import Method from './Method';

function getFunctions(abi: AbiItem[]): AbiItem[] {
	const temp: AbiItem[] = [];
	abi.forEach((element: AbiItem) => {
		if (element.type === 'function') {
			temp.push(element);
		}
	});
	return temp;
}

function getArguments(abi: AbiItem | null, args: { [key: string]: string }) {
	const temp: string[] = [];
	if (abi) {
		abi.inputs?.forEach((item: AbiInput) => {
			temp.push(args[item.name]);
		});
	}
	return temp;
}

interface InterfaceProps {
	moonbeamLib: MoonbeamLib;
	// gtag: (name: string) => void;
	busy: boolean;
	setBusy: (state: boolean) => void;
	addNewContract: (contract: InterfaceContract) => void; // for SmartContracts
	setSelected: (select: InterfaceContract) => void; // for At Address
	updateBalance: (address: string) => void;
}

interface CompilationErrorFormatted {
	message: string;
	severity: string;
}

const Compiler: React.FunctionComponent<InterfaceProps> = (props) => {
	const [client, setClient] = React.useState<PluginClient<Api, Readonly<IRemixApi>> | undefined | null>(null);
	const [fileName, setFileName] = React.useState<string>('');
	const [iconSpin, setIconSpin] = React.useState<string>('');
	const [contracts, setContracts] = React.useState<{ fileName: string; data: { [key: string]: any } }>({
		fileName: '',
		data: {},
	});
	const [contractName, setContractName] = React.useState<string>('');
	const [constructor, setConstructor] = React.useState<AbiItem | null>(null);
	const [args, setArgs] = React.useState<{ [key: string]: string }>({});
	const [address, setAddress] = React.useState<string>('');
	const [errors, setErrors] = React.useState<CompilationErrorFormatted[]>([]);
	const [autoCompiler, setAutoCompiler] = React.useState<boolean>(false);
	const [languageVersion, setLangVersion] = React.useState<string>('');

	const {
		moonbeamLib,
		// gtag,
		busy,
		setBusy,
		addNewContract,
		setSelected,
		updateBalance,
	} = props;

	React.useEffect(() => {
		async function init() {
			const temp: PluginClient = createClient(new PluginClient());
			await temp.onload();
			temp.on(
				'solidity',
				'compilationFinished',
				(fn: string, source: any, _languageVersion: string, data: CompilationResult) => {
					// console.log(fn, source, languageVersion, data);
					console.log('ok', _languageVersion);
					setLangVersion(_languageVersion);
					if (data.errors) {
						console.log('data.errors', data.errors);
						setErrors(
							data.errors.map((error: CompilationError) => {
								return {
									message: error.formattedMessage ? error.formattedMessage : JSON.stringify(error),
									severity: error.severity,
								};
							})
						);
					}
					if (data.contracts[fn]) setContracts({ fileName: fn, data: data.contracts[fn] });
					select(
						Object.keys(data.contracts[fn]).length > 0 ? Object.keys(data.contracts[fn])[0] : '',
						data.contracts[fn]
					);
				}
			);
			temp.on('fileManager', 'currentFileChanged', (fn: string) => {
				setFileName(fn);
			});
			// auto compile
			temp.on('fileManager', 'fileSaved', (fn: string) => {
				if (autoCompiler) {
					compile();
				}
			});
			try {
				setFileName(await temp.call('fileManager', 'getCurrentFile')); // .fileManager.getCurrentFile());
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log('Error from IDE : No such file or directory No file selected');
			}
			setClient(temp);
		}
		init();
		// eslint-disable-next-line
	}, []);

	async function compile() {
		setBusy(true);
		console.log('COMPILE');
		setIconSpin('fa-spin');
		await client?.call('solidity', 'compile', fileName);
		setIconSpin('');
		setBusy(false);
	}

	function select(name: string, newContracts: { [key: string]: any } | null = null) {
		const abi = newContracts ? newContracts[name].abi : contracts.data[name].abi;
		setContractName(name);
		setConstructor(null);
		setArgs({});
		abi.forEach((element0: AbiItem) => {
			if (element0.type === 'constructor') {
				const temp: { [key: string]: string } = {};
				element0.inputs?.forEach((element1: AbiInput) => {
					temp[element1.name] = '';
				});
				setArgs(temp);
				setConstructor(element0);
			}
		});
		setSelected({ name, address: '', abi: getFunctions(abi) });
	}

	async function onDeploy() {
		if (!busy && moonbeamLib.isConnected && moonbeamLib.isMoonbeamNetwork) {
			// gtag('deploy');
			setBusy(true);
			setAddress('');
			try {
				const newContract = new moonbeamLib.web3.eth.Contract(
					JSON.parse(JSON.stringify(contracts.data[contractName].abi))
				);
				const accounts = await moonbeamLib.getAccounts();
				console.log('constructor', constructor, 'args', args); // TODO check inputs
				const parms: string[] = getArguments(constructor, args);
				const rawTx = {
					from: accounts[0],
					data: newContract
						.deploy({ data: `0x${contracts.data[contractName].evm.bytecode.object}`, arguments: parms })
						.encodeABI(),
				};
				// console.log(rawTx)
				const txReceipt = await moonbeamLib.sendTransaction(rawTx);
				// console.log(txReceipt)
				if (txReceipt.contractAddress) {
					setAddress(txReceipt.contractAddress);
					addNewContract({
						name: contractName,
						address: txReceipt.contractAddress,
						abi: getFunctions(contracts.data[contractName].abi),
					});
				}
				updateBalance(accounts[0]);
			} catch (e) {
				// eslint-disable-next-line
				console.error(e);

				console.log('ok', '+', e.toString(), '+');
				setErrors([
					e.message && e.message === 'param.map is not a function'
						? 'Constructor Input Missing'
						: e.message
						? e.message
						: e.toString(),
				]);
			}
			setBusy(false);
		}
	}

	function Contracts() {
		const { data } = contracts;
		const value = contracts.fileName.split('/')[contracts.fileName.split('/').length - 1];
		const items = Object.keys(data).map((key) => (
			<option key={key} value={key}>
				{`${key} - ${value}`}
			</option>
		));
		// <Button
		// 								variant="link"
		// 								size="sm"
		// 								className="mt-0 pt-0 float-right"
		// 								disabled={!address}
		// 								onClick={() => {
		// 									copy(address);
		// 								}}
		// 							>
		// 								<i className="far fa-copy" />
		// 							</Button>
		return (
			<Form>
				<Form.Group>
					<Form.Text className="text-muted">
						<small>CONTRACT</small>
						<Button
							variant="link"
							size="sm"
							className="mt-0 pt-0 float-right"
							disabled={!contracts.data[contractName]}
							onClick={() => {
								if (contracts.data[contractName]) {
									copy(JSON.stringify(contracts.data[contractName].abi, null, 4));
								}
							}}
						>
							<i className="far fa-copy" />
						</Button>
					</Form.Text>
					<InputGroup>
						<Form.Control
							as="select"
							value={contractName}
							onChange={(e) => {
								select(e.target.value);
							}}
						>
							{items}
						</Form.Control>
						<InputGroup.Append>
							<small style={{ padding: '8px' }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-caret-down-fill"
									viewBox="-8px 0 20 20"
								>
									<path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
								</svg>
							</small>
						</InputGroup.Append>
					</InputGroup>
				</Form.Group>
			</Form>
		);
	}

	// {/* <InputGroup className="mb-3">
	// 	<InputGroup.Prepend>
	// 		<Form.Check
	// 			type="checkbox"
	// 			label="Auto-Compile"
	// 			onClick={async () => {
	// 				await setAutoCompiler(!autoCompiler);
	// 			}}
	// 		/>
	// 	</InputGroup.Prepend>
	// 	<InputGroup.Append>
	// 		<small>{languageVersion}</small>
	// 	</InputGroup.Append>
	// </InputGroup> */}
	return (
		<div className="Compiler">
			<Form.Group>
				<InputGroup className="mb-3">
					<Form.Check
						type="checkbox"
						label={`Auto-Compile (${languageVersion})`}
						onClick={async () => {
							await setAutoCompiler(!autoCompiler);
						}}
					/>
				</InputGroup>
				<Button
					variant="primary"
					onClick={async () => {
						await compile();
					}}
					block
					disabled={fileName === '' || iconSpin !== ''}
				>
					<i className={`fas fa-sync ${iconSpin}`} style={{ marginRight: '0.3em' }} />
					<span>
						Compile&nbsp;
						{`${fileName === '' ? '<no file selected>' : fileName.split('/')[fileName.split('/').length - 1]}`}
					</span>
				</Button>
			</Form.Group>
			<hr />
			<Contracts />
			<Card>
				<Card.Header className="p-2">Deploy</Card.Header>
				<Card.Body className="py-1 px-2">
					<Method
						abi={constructor}
						setArgs={(name: string, value: string) => {
							args[name] = value;
						}}
					/>
					{errors.map((error, i) => {
						console.log('error', error);
						return (
							<Alert
								key={error.message}
								variant={error.severity === 'error' ? 'danger' : 'warning'}
								onClose={() =>
									setErrors(
										errors.filter((_, j) => {
											return j !== i;
										})
									)
								}
								dismissible
								hidden={error.message === ''}
							>
								<small>{error.message}</small>
							</Alert>
						);
					})}
					<InputGroup className="mb-3">
						<InputGroup.Append>
							<Button
								variant="warning"
								block
								size="sm"
								disabled={
									busy || !(moonbeamLib && moonbeamLib.isConnected && moonbeamLib.isMoonbeamNetwork) || fileName === ''
								}
								onClick={onDeploy}
							>
								<small>Deploy</small>
							</Button>
						</InputGroup.Append>
					</InputGroup>
					<Form.Group>
						<Form.Label>Deployed Contract Address</Form.Label>
						<InputGroup className="mb-3">
							{address !== '' ? (
								<InputGroup.Append>
									<Button
										variant="link"
										size="sm"
										className="mt-0 pt-0 float-right"
										disabled={!address}
										onClick={() => {
											copy(address);
										}}
									>
										<i className="far fa-copy" />
									</Button>
								</InputGroup.Append>
							) : null}
							<Form.Control value={address} placeholder="contract address" size="sm" readOnly />
						</InputGroup>
						{address === '' ? <Form.Text className="text-muted">Deploy your own contract</Form.Text> : null}
					</Form.Group>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Compiler;
