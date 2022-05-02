import { Dispatch } from "react";
import { ChatRoomsActionTypes } from "../../types/actions/CharRoomsActions";
import { AuthorizationActionTypes } from "../../types/actions/AuthorizationActions";
import { ChatRoomsActions } from "../../types/actions/CharRoomsActions";

export const SET_NEW_MESSAGES = (data: any) => {
  console.log("SET_NEW_MESSAGES", data);
  return { type: ChatRoomsActionTypes.SET_NEW_MESSAGE, payload: data };
};

export const CHANGE_ROOM = (data: any) => {
  return (dispatch: Dispatch<ChatRoomsActions>) => {
    console.log("change_room", data);
    dispatch({ type: ChatRoomsActionTypes.CHANGE_ROOM, payload: data });
  };
};

export const SET_USERNAME = (data: any) => {
  console.log("SET_USERNAME", data);
  return { type: AuthorizationActionTypes.LOG_IN, payload: data };
};

export const ADD_ROOM = (data: any) => {
  console.log("ADD_ROOM", data);
  return { type: ChatRoomsActionTypes.ADD_ROOM, payload: data };
};
