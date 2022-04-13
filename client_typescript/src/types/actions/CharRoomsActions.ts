import { IChatRoom, IMessage } from "../states/ChatRoomsTypes";

export enum ChatRoomsActionTypes {
  ADD_ROOM = "ADD_ROOM",
  CHANGE_ROOM = "CHANGE_ROOM",
  SET_NEW_MESSAGE = "SET_NEW_MESSAGE",
}

interface AddRoomAction {
  type: ChatRoomsActionTypes.ADD_ROOM;
  payload: { room: IChatRoom; id: string };
}

interface ChangeRoomAction {
  type: ChatRoomsActionTypes.CHANGE_ROOM;
  payload: { id: string };
}

interface SetNewMessageAction {
  type: ChatRoomsActionTypes.SET_NEW_MESSAGE;
  payload: { id: string; message: IMessage };
}

export type ChatRoomsActions =
  | AddRoomAction
  | ChangeRoomAction
  | SetNewMessageAction;
