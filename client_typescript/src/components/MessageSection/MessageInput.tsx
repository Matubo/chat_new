import React, { FC, useRef } from 'react';
import send from '../../assets/img/send.png';
import strHaveSymbols from '../../utils/meaningfulSymbChecker';
import strWhitespaceClean from '../../utils/whitespaceCleaner';
import './MessageInput.css';

type MessageInputProps = {
	sendMessage: Function;
	MAX_LENGTH: number;
};

const MessageInput: FC<MessageInputProps> = ({ sendMessage, MAX_LENGTH }) => {
	const inpRef = useRef<HTMLDivElement>(null);

	function sendMessageHandler() {
		let textContent = (inpRef.current as HTMLInputElement).innerText;
		if (textContent != null) {
			if (strHaveSymbols(textContent)) {
				textContent = strWhitespaceClean(textContent);
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
