import {
  ADD_ROOM,
  SET_NEW_MESSAGES,
  SET_USERNAME,
} from "../store/action-creator/Actions";
import {
  SendMessageFunction,
  CreateRoomFunction,
  JoinToRoomFunction,
  SetUsernameFunction,
  RequestTypes,
} from "../types/queries/requests";
import {
  AcceptSetUsernameFunctionParams,
  AddRoomFunctionParams,
  NewRoomMessageFunctionParams,
  ResponsesTypes,
} from "../types/queries/responses";
import { socket } from "./io";
import request from "./requests/request";
import response from "./responses/response";
import { store } from "../store/store";

const requestTemplate = request(socket);
const responseTemplate = response(socket);

const SEND_MESSAGE: SendMessageFunction = requestTemplate(
  RequestTypes.SEND_MESSAGE
);
const SET_USERNAME_REQUEST: SetUsernameFunction = requestTemplate(
  RequestTypes.SET_USERNAME_REQUEST
);
const CREATE_ROOM_REQUEST: CreateRoomFunction = requestTemplate(
  RequestTypes.CREATE_ROOM_REQUEST
);
const JOIN_TO_ROOM_REQUEST: JoinToRoomFunction = requestTemplate(
  RequestTypes.JOIN_TO_ROOM_REQUEST
);

responseTemplate(ResponsesTypes.ACCEPT_CREATE_ROOM)(
  (data: AddRoomFunctionParams) => store.dispatch(ADD_ROOM(data))
);
responseTemplate(ResponsesTypes.ACCEPT_JOIN_TO_ROOM)(
  (data: AddRoomFunctionParams) => store.dispatch(ADD_ROOM(data))
);
responseTemplate(ResponsesTypes.ACCEPT_SET_USERNAME)(
  (data: AcceptSetUsernameFunctionParams) => store.dispatch(SET_USERNAME(data))
);
responseTemplate(ResponsesTypes.NEW_ROOM_MESSAGE)(
  (data: NewRoomMessageFunctionParams) => store.dispatch(SET_NEW_MESSAGES(data))
);

export {
  SEND_MESSAGE,
  SET_USERNAME_REQUEST,
  CREATE_ROOM_REQUEST,
  JOIN_TO_ROOM_REQUEST,
};
