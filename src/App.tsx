import React from 'react';
import { Container, Form, InputGroup, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import copy from 'copy-to-clipboard';
import { NETWORKS, MoonbeamLib, networkName } from './moonbeam-signer';
import Compiler from './components/Compiler';
import SmartContracts from './components/SmartContracts';
import { InterfaceContract } from './components/Types';

const App: React.FunctionComponent = () => {
	const [account, setAccount] = React.useState<string>('');
	const [balance, setBalance] = React.useState<string>('');
	const [network, setNetwork] = React.useState<string>('Moonbase Alpha');
	// const [blockscout, setBlockscout] = React.useState<string>('');
	const [busy, setBusy] = React.useState<boolean>(false);
	const [moonbeamLib] = React.useState<MoonbeamLib>(new MoonbeamLib(NETWORKS['Moonbase Alpha']));
	const [atAddress, setAtAddress] = React.useState<string>('');
	const [contracts, setContracts] = React.useState<InterfaceContract[]>([]);
	const [selected, setSelected] = React.useState<InterfaceContract | null>(null);

	async function connect(toAlpha?: boolean) {
		setBusy(true);
		const { networkId } = await moonbeamLib.connectMetaMask(
			(accounts: string[]) => {
				setAccount(accounts[0]);
				updateBalance(accounts[0]);
			},
			async (_networkId: number) => {
				await updateBalance(account);
				setNetwork(networkName(_networkId));
			},
			toAlpha
		);
		setNetwork(networkName(networkId));
		setBusy(false);
	}

	async function updateBalance(address: string) {
		if (address && address !== '') {
			const readBalance = await moonbeamLib.getTotalBalance(address);
			setBalance(moonbeamLib.web3.utils.fromWei(readBalance.toString()));
		}
	}

	// async function changeNetwork(e: React.ChangeEvent<HTMLInputElement>) {
	// 	setBusy(true);
	// 	setContracts([]);
	// 	const temp = e.target.value;
	// 	if (NETWORKS[temp]) {
	// 		setNetwork(temp);
	// 		setBlockscout(NETWORKS[temp].blockscout || '');
	// 		await moonbeamLib.changeNetwork(NETWORKS[temp]);
	// 		await updateBalance(account);
	// 	} else {
	// 		setNetwork('Not Moonbeam');
	// 	}
	// 	setBusy(false);
	// }

	function addNewContract(contract: InterfaceContract) {
		setContracts(contracts.concat([contract]));
	}

	function Networks() {
		// const list = NETWORKS;
		// const items = Object.keys(list).map((key) => (
		// 	<option key={key} value={key}>
		// 		{key}
		// 	</option>
		// ));
		return (
			<Form.Group>
				<Form.Text className="text-muted">
					<small>NETWORK</small>
				</Form.Text>
				<InputGroup>
					<Form.Control type="text" placeholder="0.0" value={network} size="sm" readOnly />
				</InputGroup>
				{/* <Form.Control as="select" value={network} onChange={changeNetwork} disabled={!moonbeamLib.isConnected}>
					{items}
				</Form.Control> */}
			</Form.Group>
		);
	}

	return (
		<div className="App">
			<Container>
				<Form>
					<Form.Group>
						<Form.Text className="text-muted">
							<small>ACCOUNT</small>
						</Form.Text>
						<InputGroup>
							{account ? (
								<InputGroup.Append>
									<Button
										variant="link"
										size="sm"
										className="mt-0 pt-0 float-right"
										disabled={!account}
										onClick={() => {
											copy(account);
										}}
									>
										<i className="far fa-copy" />
									</Button>
								</InputGroup.Append>
							) : null}
							<Form.Control type="text" placeholder="Account" value={account} size="sm" readOnly />
							<InputGroup.Append>
								<OverlayTrigger
									placement="left"
									overlay={
										<Tooltip id="overlay-connect" hidden={account !== ''}>
											Connect to Wallet
										</Tooltip>
									}
								>
									<Button variant="warning" block size="sm" disabled={busy} onClick={() => connect()}>
										<small>Connect</small>
									</Button>
								</OverlayTrigger>
							</InputGroup.Append>
						</InputGroup>
						{moonbeamLib.isConnected ? (
							network === 'Not Moonbeam' ? (
								<p className="text-center mt-3">
									<small style={{ color: 'red', padding: '1em' }}>
										Connect MetaMask to a Moonbeam Network :{' '}
										<Button variant="warning" block size="sm" disabled={busy} onClick={() => connect(true)}>
											Connect to Moonbase Alpha
										</Button>
										<a
											target="_parent"
											rel="noreferrer"
											href="https://docs.moonbeam.network/getting-started/testnet/metamask/"
										>
											(How to connect to Moonbeam networks)
										</a>
									</small>
								</p>
							) : (
								<p className="text-center mt-3">
									<small style={{ color: 'green' }}>Connected to {network}</small>
								</p>
							)
						) : (
							<p className="text-center mt-3">
								<small style={{ color: 'red' }}>Please Connect</small>
							</p>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Text className="text-muted">
							<small>BALANCE (MOONBEAM)</small>
						</Form.Text>
						<InputGroup>
							<Form.Control type="text" placeholder="0.0" value={balance} size="sm" readOnly />
						</InputGroup>
					</Form.Group>
					<Networks />
				</Form>
				<hr />
				<Compiler
					moonbeamLib={moonbeamLib}
					// Analytics
					// gtag={(name: string) => {
					// 	const { gtag } = window as { [key: string]: any };
					// 	gtag('event', name, { network });
					// }}
					busy={busy}
					setBusy={setBusy}
					addNewContract={addNewContract}
					setSelected={setSelected}
					updateBalance={updateBalance}
				/>
				<p className="text-center mt-3">
					<small>OR</small>
				</p>
				<InputGroup className="mb-3">
					<Form.Control
						value={atAddress}
						placeholder="contract address"
						onChange={(e) => {
							setAtAddress(e.target.value);
						}}
						size="sm"
						disabled={busy || account === '' || !selected}
					/>
					<InputGroup.Append>
						<OverlayTrigger
							placement="left"
							overlay={<Tooltip id="overlay-ataddresss">Use deployed Contract address</Tooltip>}
						>
							<Button
								variant="primary"
								size="sm"
								disabled={busy || account === '' || !selected}
								onClick={() => {
									setBusy(true);
									if (selected) {
										addNewContract({ ...selected, address: atAddress });
									}
									setBusy(false);
								}}
							>
								<small>At Address</small>
							</Button>
						</OverlayTrigger>
					</InputGroup.Append>
				</InputGroup>
				<hr />
				<SmartContracts
					moonbeamLib={moonbeamLib}
					busy={busy}
					setBusy={setBusy}
					// blockscout={blockscout}
					contracts={contracts}
					updateBalance={updateBalance}
				/>
			</Container>
		</div>
	);
};

export default App;
