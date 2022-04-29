import { ADD_ROOM,SET_NEW_MESSAGES,SET_USERNAME } from '../store/action-creator/Actions';
import { SendMessageFunction,CreateRoomFunction,JoinToRoomFunction,SetUsernameFunction, RequestTypes } from '../types/queries/requests';
import { AcceptSetUsernameFunctionParams, AddRoomFunctionParams, NewRoomMessageFunctionparams, ResponsesTypes } from '../types/queries/responses';
import { socket } from './IO';
import request from './requests/request';
import response from './responses/response'
import { store } from '../store/store';

const request_template=request(socket)
const response_template=response(socket)

const SEND_MESSAGE:SendMessageFunction = request_template(RequestTypes.SEND_MESSAGE);
const SET_USERNAME_REQUEST:SetUsernameFunction = request_template(RequestTypes.SET_USERNAME_REQUEST);
const CREATE_ROOM_REQUEST:CreateRoomFunction = request_template(RequestTypes.CREATE_ROOM_REQUEST);
const JOIN_TO_ROOM_REQUEST:JoinToRoomFunction =request_template(RequestTypes.JOIN_TO_ROOM_REQUEST);

response_template(ResponsesTypes.ACCEPT_CREATE_ROOM)((data:AddRoomFunctionParams)=>store.dispatch(ADD_ROOM(data)));
response_template(ResponsesTypes.ACCEPT_JOIN_TO_ROOM)((data:AddRoomFunctionParams)=>store.dispatch(ADD_ROOM(data)));
response_template(ResponsesTypes.ACCEPT_SET_USERNAME)((data:AcceptSetUsernameFunctionParams)=>store.dispatch(SET_USERNAME(data)));
response_template(ResponsesTypes.NEW_ROOM_MESSAGE)((data:NewRoomMessageFunctionparams)=>store.dispatch(SET_NEW_MESSAGES(data)))

export {SEND_MESSAGE,SET_USERNAME_REQUEST,CREATE_ROOM_REQUEST,JOIN_TO_ROOM_REQUEST}