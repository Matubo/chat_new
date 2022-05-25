import React, { FC, useState } from 'react';
import './Authorization.css';

type AuthorizationWindowPropTypes = {
	authorization: Function;
};

const AuthorizationWindow: FC<AuthorizationWindowPropTypes> = ({
	authorization,
}) => {
	const [user, setUser] = useState('');

	const clickHandler = () => {
		if (user.length > 2) {
			authorization(user);
		}
	};

	const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser(e.target.value);
	};

	const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key == 'Enter') {
			clickHandler();
			e.preventDefault();
		}
	};

	return (
		<div className="authorization">
			<p className="authorization__header">Введите имя:</p>
			<input
				type="text"
				className="authorization__input input"
				value={user}
				onChange={changeInputHandler}
				onKeyDown={onKeyDownHandler}
			/>
			<button className="authorization__button button" onClick={clickHandler}>
				Вход
			</button>
		</div>
	);
};

export default AuthorizationWindow;
