import React from 'react';
import { Alert, Accordion, Button, Card, Form, InputGroup } from 'react-bootstrap';
import copy from 'copy-to-clipboard';
import { CSSTransition } from 'react-transition-group';
import { AbiInput, AbiItem } from 'web3-utils';
import { MoonbeamLib } from '../moonbeam-signer';
import { InterfaceContract } from './Types';
import Method from './Method';
import './animation.css';

const EMPTYLIST = 'Currently you have no contract instances to interact with.';

const colors: { [key: string]: string } = {
	primary: '#007aa6',
	warning: '#c97539',
	danger: '#dc3545',
	lightgreen: '#a2ffb0',
	darkgreen: '#27443f',
};

interface InterfaceDrawMethodProps {
	moonbeamLib: MoonbeamLib;
	busy: boolean;
	setBusy: (state: boolean) => void;
	abi: AbiItem;
	address: string;
	updateBalance: (address: string) => void;
}
function buttonVariant(stateMutability: string | undefined): string {
	switch (stateMutability) {
		case 'view':
		case 'pure':
			return 'primary';
		case 'nonpayable':
			return 'warning';
		case 'payable':
			return 'danger';
		default:
			break;
	}
	return '';
}

const DrawMethod: React.FunctionComponent<InterfaceDrawMethodProps> = (props) => {
	const [error, setError] = React.useState<string>('');
	const [success, setSuccess] = React.useState<string>('');
	const [receipt, setReceipt] = React.useState<string>('');
	const [args, setArgs] = React.useState<{ [key: string]: string }>({});
	const [txValue, setTxValue] = React.useState<number>(0);
	const { moonbeamLib, busy, setBusy, abi, address, updateBalance } = props;

	React.useEffect(() => {
		const temp: { [key: string]: string } = {};
		abi.inputs?.forEach((element: AbiInput) => {
			temp[element.name] = '';
		});
		setArgs(temp);
	}, [abi.inputs]);

	return (
		<>
			<Method
				abi={abi}
				setArgs={(name: string, value: string) => {
					args[name] = value;
				}}
				txValue={txValue}
				setTxValue={setTxValue}
			/>
			<Alert variant="danger" onClose={() => setError('')} dismissible hidden={error === ''}>
				<small>{error}</small>
			</Alert>
			<Alert variant="success" onClose={() => setSuccess('')} dismissible hidden={success === ''}>
				<Accordion>
					<Card style={{ border: '0' }}>
						<Accordion.Toggle
							style={{ backgroundColor: colors.darkgreen }}
							as={Card.Header}
							eventKey={success}
							className="p-1  custom-select"
						>
							Tx Receipt
						</Accordion.Toggle>
						<Accordion.Collapse style={{ backgroundColor: colors.darkgreen }} eventKey={success}>
							<Card.Body className="py-1 px-2">
								<small>{success}</small>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Alert>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<Button
						variant={buttonVariant(abi.stateMutability)}
						block
						size="sm"
						disabled={busy || !(moonbeamLib && moonbeamLib.isConnected && moonbeamLib.isMoonbeamNetwork)}
						onClick={async () => {
							setBusy(true);
							const parms: string[] = [];
							abi.inputs?.forEach((item: AbiInput) => {
								parms.push(args[item.name]);
							});
							const newContract = new moonbeamLib.web3.eth.Contract(JSON.parse(JSON.stringify([abi])), address);
							const accounts = await moonbeamLib.getAccounts();
							if (abi.stateMutability === 'view' || abi.stateMutability === 'pure') {
								try {
									const txReceipt = abi.name
										? await newContract.methods[abi.name](...parms).call({ from: accounts[0], gasPrice: 1e9 })
										: null;
									if (typeof txReceipt === 'object') {
										setSuccess(JSON.stringify(txReceipt, null, 4));
									} else {
										setReceipt(txReceipt);
									}
									// TODO: LOG
								} catch (e) {
									// console.error(error)
									setError(e.message ? e.message : e.toString());
								}
							} else {
								try {
									const txReceipt = abi.name
										? await newContract.methods[abi.name](...parms).send({
												from: accounts[0],
												gasPrice: 1e9,
												value: txValue,
										  })
										: null;
									setError('');
									setSuccess(JSON.stringify(txReceipt, null, 2));
									updateBalance(accounts[0]);
									// TODO: LOG
								} catch (e) {
									// console.error(error)
									setError(e.message ? e.message : e.toString());
								}
							}
							setBusy(false);
						}}
					>
						<small>{abi.stateMutability === 'view' || abi.stateMutability === 'pure' ? 'call' : 'transact'}</small>
					</Button>
					<Button
						variant={buttonVariant(abi.stateMutability)}
						size="sm"
						className="mt-0 pt-0 float-right"
						onClick={() => {
							if (abi.name) {
								try {
									const parms: string[] = [];
									abi.inputs?.forEach((item: AbiInput) => {
										if (args[item.name]) {
											parms.push(args[item.name]);
										}
									});
									const newContract = new moonbeamLib.web3.eth.Contract(JSON.parse(JSON.stringify([abi])), address);
									copy(newContract.methods[abi.name](...parms).encodeABI());
								} catch (e) {
									console.log(e.toString());
								}
							}
						}}
					>
						<i className="far fa-copy" />
					</Button>
				</InputGroup.Prepend>
				<Form.Control
					value={receipt}
					size="sm"
					readOnly
					hidden={!(abi.stateMutability === 'view' || abi.stateMutability === 'pure')}
				/>
			</InputGroup>
		</>
	);
};

const ContractCard: React.FunctionComponent<{
	moonbeamLib: MoonbeamLib;
	busy: boolean;
	setBusy: (state: boolean) => void;
	contract: InterfaceContract;
	index: number;
	remove: () => void;
	updateBalance: (address: string) => void;
}> = (props) => {
	const [enable, setEnable] = React.useState<boolean>(true);
	const { moonbeamLib, busy, setBusy, contract, index, remove, updateBalance } = props;

	function DrawMethods(indexOfContract: number) {
		const list = contract.abi ? contract.abi : [];
		const items = list.map((abi: AbiItem, id: number) => (
			<Accordion key={`Methods_A_${indexOfContract.toString()}_${id.toString()}`}>
				<Card>
					<Accordion.Toggle
						style={{ color: 'white', backgroundColor: colors[buttonVariant(abi.stateMutability)] }}
						as={Card.Header}
						eventKey={`Methods_${indexOfContract.toString()}_${id.toString()}`}
						className="p-1  custom-select"
					>
						<small>{abi.name}</small>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey={`Methods_${indexOfContract.toString()}_${id.toString()}`}>
						<Card.Body className="py-1 px-2">
							<DrawMethod
								moonbeamLib={moonbeamLib}
								busy={busy}
								setBusy={setBusy}
								abi={abi}
								address={contract.address}
								updateBalance={updateBalance}
							/>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		));
		return <>{items}</>;
	}

	return (
		<CSSTransition in={enable} timeout={300} classNames="zoom" unmountOnExit onExited={remove}>
			<Card className="mb-2">
				<Accordion.Toggle as={Card.Header} eventKey="0" className="px-2 py-1 form-control custom-select">
					<strong className="align-middle">{contract.name}</strong>
					&nbsp;
					<small className="align-middle">{`${contract.address.substring(0, 6)}...${contract.address.substring(
						38
					)}`}</small>
					<Button
						variant="link"
						size="sm"
						className="float-left align-middle"
						onClick={() => {
							copy(contract.address);
						}}
					>
						<i className="far fa-copy" />
					</Button>
					<Button
						className="float-left align-middle"
						size="sm"
						variant="link"
						onClick={() => {
							setEnable(false);
						}}
					>
						<i className="fas fa-trash-alt" />
					</Button>
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<Card.Body>{DrawMethods(index)} </Card.Body>
				</Accordion.Collapse>
			</Card>
		</CSSTransition>
	);
};

interface InterfaceSmartContractsProps {
	moonbeamLib: MoonbeamLib;
	busy: boolean;
	setBusy: (state: boolean) => void;
	contracts: InterfaceContract[];
	updateBalance: (address: string) => void;
}

const SmartContracts: React.FunctionComponent<InterfaceSmartContractsProps> = (props) => {
	const [error, setError] = React.useState<string>('');
	const [count, setCount] = React.useState<number>(0);
	const { moonbeamLib, busy, setBusy, contracts, updateBalance } = props;

	React.useEffect(() => {
		setCount(0);
		setError(EMPTYLIST);
	}, [contracts, busy]);

	function DrawContracts() {
		const items = contracts.map((data: InterfaceContract, index: number) => (
			<Accordion defaultActiveKey={index.toString()}>
				<ContractCard
					moonbeamLib={moonbeamLib}
					busy={busy}
					setBusy={setBusy}
					contract={data}
					index={index}
					remove={() => {
						setCount(count + 1);
						setError(EMPTYLIST);
					}}
					updateBalance={updateBalance}
					key={`Contract_${index.toString()}`}
				/>
			</Accordion>
		));
		return <div>{items}</div>;
	}

	return (
		<div className="SmartContracts">
			<Alert variant="warning" className="text-center" hidden={contracts.length !== count}>
				<small>{error}</small>
			</Alert>
			{DrawContracts()}
		</div>
	);
};

export default SmartContracts;
