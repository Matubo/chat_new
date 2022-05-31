import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import Authorization from '../Authorization/Authorization';
import './AppRoot.css';
import {
	CREATE_ROOM_REQUEST,
	JOIN_TO_ROOM_REQUEST,
	SEND_MESSAGE,
	SET_USERNAME_REQUEST,
} from '../../queries';
import ChatList from '../ChatList/ChatList';
import { CHANGE_ROOM } from '../../store/action-creator/Actions';
import MessageSection from '../MessageSection/MessageSection';

const ChatApp: FC = () => {
	const { authorized, username } = useSelector(
		(store: RootState) => store.authorization
	);
	const { rooms, currentRoom } = useSelector(
		(store: RootState) => store.chatRoom
	);

	let dispatch = useDispatch();

	if (!authorized) {
		return (
			<Authorization
				authorization={(data: string) =>
					SET_USERNAME_REQUEST({ username: data })
				}
			/>
		);
	} else {
		return (
			<div className="chat-field-grid">
				<ChatList
					rooms={rooms}
					currentRoom={currentRoom}
					createRoom={() => {
						CREATE_ROOM_REQUEST({});
					}}
					changeRoom={(id: string) => dispatch(CHANGE_ROOM({ id }))}
					connectToRoom={(id: string) => JOIN_TO_ROOM_REQUEST({ id })}
				></ChatList>
				<MessageSection
					messages={currentRoom ? rooms[currentRoom].messages : undefined}
					sendMessCallback={(message: string) => {
						if (currentRoom) {
							SEND_MESSAGE({ id: currentRoom, message });
						}
					}}
					selfUsername={username}
				></MessageSection>
			</div>
		);
	}
};

export default ChatApp;
