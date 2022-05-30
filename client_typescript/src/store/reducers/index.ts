import { combineReducers } from 'redux';
import { authorizationReducer } from './Authorization';
import { chatRoomsReducer } from './ChatRooms';

export const reducer = combineReducers({
	chatRoom: chatRoomsReducer,
	authorization: authorizationReducer,
});

export type RootState = ReturnType<typeof reducer>;
