import { Dispatch } from "react";
import {
  ChatRoomsActions,
  ChatRoomsActionTypes,
} from "../../types/actions/ChatRoomsActions";
import { AuthorizationActionTypes } from "../../types/actions/AuthorizationActions";
import { NewRoomMessageFunctionParams } from "../../types/queries/responses";

/* type dataParams= {status:boolean,} */

export const SET_NEW_MESSAGES = (
  data: NewRoomMessageFunctionParams
): ChatRoomsActions => {
  console.log("SET_NEW_MESSAGES", data);
  return {
    type: ChatRoomsActionTypes.SET_NEW_MESSAGE,
    payload: { id: data.id, message: data.message },
  };
};

/* export const SET_NEW_MESSAGES = (data: NewRoomMessageFunctionParams) => {
  console.log("SET_NEW_MESSAGES", data);
  /*   const { status, ...payload } = data; 
  try {
    /*     if (status == false) new Error("status FALSE"); 
    return { type: ChatRoomsActionTypes.SET_NEW_MESSAGE, payload: data };
  } catch (e) {
    console.error("SET_NEW_MESSAGES", e, data);
  }
}; */

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
