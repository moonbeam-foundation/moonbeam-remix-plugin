import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Web3 from 'web3';
import BN from 'bn.js';

type Unit = 'ether' | 'finney' | 'gwei' | 'wei';
function isUnit(text: string): Unit | undefined {
	if (['ether', 'finney', 'gwei', 'wei'].includes(text)) {
		return text as Unit;
	}
	throw new Error('This is not a valid unit');
}

export default function TxValue(setTxValue: (input: BN) => void): JSX.Element {
	const [value, setValue] = React.useState<number>(0);
	const [unit, setUnit] = React.useState<Unit>('wei');
	React.useEffect(() => {
		setTxValue(Web3.utils.toWei(new BN(value), unit));
	}, [value, unit, setTxValue]);
	return (
		<Form.Group>
			<Form.Text className="text-muted">
				<small>Value</small>
			</Form.Text>
			<InputGroup>
				<Form.Control
					type="number"
					size="sm"
					name="Tx Value"
					placeholder="0"
					value={value}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setValue(Number(event.target.value));
					}}
					style={{ height: 'calc(1.25em + 1rem + 2px)' }}
				/>
				<InputGroup.Append>
					<Form.Control
						as="select"
						value={unit}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							const selectedUnit = isUnit(event.target.value);
							if (selectedUnit) setUnit(selectedUnit);
						}}
						style={{ marginLeft: '1em' }}
					>
						{['ether', 'finney', 'gwei', 'wei'].map((opt) => {
							return <option key={opt}>{opt}</option>;
						})}
					</Form.Control>
				</InputGroup.Append>
			</InputGroup>
		</Form.Group>
	);
}
