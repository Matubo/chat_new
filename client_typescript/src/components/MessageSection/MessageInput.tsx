import React, { FC, useRef } from 'react';
import send from '../../assets/img/send.png';
import './MessageInput.css';

type MessageInputProps = {
	sendMessage: Function;
};

function strHaveAnyMeaningfulSymbols(str: string) {
	if (str.match(/\S/i) != null) return true;
	else return false;
}

function strWhitespaceClearing(str: string) {
	return str
		.replace(/[^\S]+/y, '')
		.replace(/[^\S]{3,}/g, '\n\n')
		.replace(/[^\S]+$/, '');
}

const MessageInput: FC<MessageInputProps> = ({ sendMessage }) => {
	const inpRef = useRef<HTMLDivElement>(null);
	const MAX_LENGTH = 1000;

	function sendMessageHandler() {
		let textContent = (inpRef.current as HTMLInputElement).innerText;
		if (textContent != null) {
			if (strHaveAnyMeaningfulSymbols(textContent)) {
				textContent = strWhitespaceClearing(textContent);
				sendMessage(textContent);
				(inpRef.current as HTMLInputElement).innerText = '';
			}
		}
	}

	const onKeyDownHandler = function (e: React.KeyboardEvent<HTMLDivElement>) {
		const currentTextLength = (e.target as HTMLInputElement).innerText.length;
		if (e.code == 'Enter' && !e.shiftKey) {
			sendMessageHandler();
			e.preventDefault();
		} else if (currentTextLength === MAX_LENGTH && e.key !== 'Backspace') {
			e.preventDefault();
		}
	};

	return (
		<div className="send-field">
			<div
				className="send-field__input input"
				contentEditable="true"
				ref={inpRef}
				placeholder="Text here.."
				onKeyDown={onKeyDownHandler}
			></div>
			<button
				className="send-field__button button"
				onClick={sendMessageHandler}
			>
				<img src={send} className="send-field__button-icon" alt="#"></img>
			</button>
		</div>
	);
};

export default MessageInput;
