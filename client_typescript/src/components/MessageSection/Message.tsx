import { FC } from 'react';
import './Message.css';

interface MessageProps {
	text: string;
	date: string;
	username: string;
	self: boolean;
}

const Message: FC<MessageProps> = ({ self, date, username, text }) => {
	return (
		<div className={self ? 'message self' : 'message'}>
			<p className="message__text">{text}</p>
			<p className="message__info">
				{date} - {username}
			</p>
		</div>
	);
};

export default Message;
