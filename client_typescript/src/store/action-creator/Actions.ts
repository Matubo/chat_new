import {
	ChatRoomsActions,
	ChatRoomsActionTypes,
} from '../../types/actions/ChatRoomsActions';
import {
	AuthorizationAction,
	AuthorizationActionTypes,
} from '../../types/actions/AuthorizationActions';
import {
	AcceptSetUsernameFunctionParams,
	AddRoomFunctionParams,
	ChangeRoomFunctionParams,
	NewRoomMessageFunctionParams,
} from '../../types/queries/responses';

export const SET_NEW_MESSAGES = (
	data: NewRoomMessageFunctionParams
): ChatRoomsActions => {
	const { id, message } = data;
	return {
		type: ChatRoomsActionTypes.SET_NEW_MESSAGE,
		payload: { id: id, message: message },
	};
};

export const CHANGE_ROOM = (data: ChangeRoomFunctionParams) => {
	const { id } = data;
	return { type: ChatRoomsActionTypes.CHANGE_ROOM, payload: { id } };
};

export const SET_USERNAME = (
	data: AcceptSetUsernameFunctionParams
): AuthorizationAction => {
	const { username } = data;
	return { type: AuthorizationActionTypes.LOG_IN, payload: { username } };
};

export const ADD_ROOM = (data: AddRoomFunctionParams): ChatRoomsActions => {
	const { room } = data;
	return {
		type: ChatRoomsActionTypes.ADD_ROOM,
		payload: { room },
	};
};
