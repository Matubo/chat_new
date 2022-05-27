import { FC, useState } from 'react';
import './ConnectionField.css';

type ConnectionBlockProps = {
	connect: Function;
	create: Function;
};
const ConnectionField: FC<ConnectionBlockProps> = function ({
	connect,
	create,
}) {
	const [value, setValue] = useState('0');

	function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value);
	}

	const connectButtonHandler = () => {
		connect(value);
		setValue('0');
	};

	const createButtonHandler = () => {
		create();
	};

	return (
		<div className="connection-field">
			<p className="connection-field__header">
				Подключение к комнате / создание
			</p>
			<div className="connection-field__functions">
				<input
					className="connection-input"
					type="number"
					name="connect"
					onChange={onChangeHandler}
				/>
				<button
					className="connection-connect-button button"
					onClick={connectButtonHandler}
				>
					connect
				</button>
				<button
					className="connection-create-button button"
					onClick={createButtonHandler}
				>
					create
				</button>
			</div>
		</div>
	);
};

export default ConnectionField;
