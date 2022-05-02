import { IChatRoom, IMessage } from "../states/ChatRoomsTypes";

export enum ResponsesTypes {
  ACCEPT_CREATE_ROOM = "accept_create_room",
  ACCEPT_JOIN_TO_ROOM = "accept_join_to_room",
  ACCEPT_SET_USERNAME = "accept_set_username",
  NEW_ROOM_MESSAGE = "new_room_message",
}

export type AddRoomFunctionParams = {
  status: boolean;
  room?: IChatRoom;
};

export type AcceptSetUsernameFunctionParams = {
  status: boolean;
  username?: string;
};

export type NewRoomMessageFunctionParams = {
  status: boolean;
  message: IMessage;
};

export type ResponsesParams =
  | AddRoomFunctionParams
  | AcceptSetUsernameFunctionParams
  | NewRoomMessageFunctionParams;
