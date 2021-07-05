import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { AbiInput, AbiItem } from 'web3-utils';

interface InterfaceProps {
	abi: AbiItem | null;
	setArgs: (name: string, value: string) => void;
	txValue: number;
	setTxValue: (txValue: number) => void;
}

const Method: React.FunctionComponent<InterfaceProps> = (props) => {
	const [inputs, setInputs] = React.useState<AbiInput[]>([]);
	const { abi, setArgs, txValue, setTxValue } = props;

	React.useEffect(() => {
		setInputs(abi && abi.inputs ? abi.inputs : []);
	}, [abi]);

	function DrawInputs() {
		const items = inputs.map((item: AbiInput, index: number) => (
			<React.Fragment key={(index + 1).toString()}>
				<Form.Text className="text-muted">
					<small>{item.name}</small>
				</Form.Text>
				<Form.Control
					type="text"
					size="sm"
					name={item.name}
					placeholder={item.type}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						if (event.target.value[0] === '[') {
							setArgs(event.target.name, JSON.parse(event.target.value));
						} else {
							setArgs(event.target.name, event.target.value);
						}
					}}
				/>
			</React.Fragment>
		));
		return (
			<Form.Group>
				<React.Fragment key={0}>
					<Form.Text className="text-muted">
						<small>Tx Value</small>
					</Form.Text>
					<InputGroup>
						<Form.Control
							type="number"
							size="sm"
							name="Tx Value"
							placeholder="0"
							value={txValue}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setTxValue(Number(event.target.value));
							}}
						/>
						<InputGroup.Append style={{ paddingLeft: '0.5em' }}>
							<Form.Text className="text-muted">wei</Form.Text>
						</InputGroup.Append>
					</InputGroup>
				</React.Fragment>
				{items}
			</Form.Group>
		);
	}

	return <Form className="Method">{DrawInputs()}</Form>;
};

export default Method;
