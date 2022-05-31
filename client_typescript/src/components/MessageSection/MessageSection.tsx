import React, { FC } from 'react';
import { IMessage } from '../../types/states/ChatRoomsTypes';
import Message from './Message';
import MessageInput from './MessageInput';
import './MessageSection.css';

type MessageSectionProps = {
	messages: IMessage[] | undefined;
	sendMessCallback: Function;
	selfUsername: string | null;
};

const MessageSection: FC<MessageSectionProps> = ({
	messages,
	sendMessCallback,
	selfUsername,
}) => {
	if (messages == undefined) {
		return <div className="message-section"></div>;
	}

	let messagesDOM = messages.map((message) => {
		const { text, date, username } = message;
		let flag = username == selfUsername ? true : false;
		return (
			<Message
				date={date}
				text={text}
				username={username}
				self={flag}
			></Message>
		);
	});

	return (
		<div className="message-section">
			<div className="message-section__messages">{messagesDOM}</div>
			<MessageInput
				sendMessage={sendMessCallback}
				MAX_LENGTH={1000}
			></MessageInput>
		</div>
	);
};

export default MessageSection;
