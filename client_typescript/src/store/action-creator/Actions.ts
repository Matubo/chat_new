import { Dispatch } from "react";
import {
  ChatRoomsActions,
  ChatRoomsActionTypes,
} from "../../types/actions/ChatRoomsActions";
import {
  AuthorizationAction,
  AuthorizationActionTypes,
} from "../../types/actions/AuthorizationActions";
import {
  AcceptSetUsernameFunctionParams,
  AddRoomFunctionParams,
  ChangeRoomFunctionParams,
  NewRoomMessageFunctionParams,
} from "../../types/queries/responses";

export const SET_NEW_MESSAGES = (
  data: NewRoomMessageFunctionParams
): ChatRoomsActions => {
  console.log("SET_NEW_MESSAGES", data);
  const { id, message } = data;
  return {
    type: ChatRoomsActionTypes.SET_NEW_MESSAGE,
    payload: { id: id, message: message },
  };
};

export const CHANGE_ROOM = (data: ChangeRoomFunctionParams) => {
  return (dispatch: Dispatch<ChatRoomsActions>) => {
    console.log("CHANGE_ROOM", data);
    const { id } = data;
    dispatch({ type: ChatRoomsActionTypes.CHANGE_ROOM, payload: { id } });
  };
};

export const SET_USERNAME = (
  data: AcceptSetUsernameFunctionParams
): AuthorizationAction => {
  console.log("SET_USERNAME", data);
  const { username } = data;
  return { type: AuthorizationActionTypes.LOG_IN, payload: { username } };
};

export const ADD_ROOM = (data: AddRoomFunctionParams): ChatRoomsActions => {
  console.log("ADD_ROOM", data);
  const { room } = data;
  return {
    type: ChatRoomsActionTypes.ADD_ROOM,
    payload: { room },
  };
};
