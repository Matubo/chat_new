import { AddNewMessageFunction, CreateRoomFunction, JoinToRoomFunction, RequestTypes, SetUsernameFunction } from '../types/queries/requests';
import { socket } from './IO';
import request from './requests/request';

const request_template=request(socket)

const ADD_MESSAGE_TO_ROOM_QUERY:AddNewMessageFunction = request_template(RequestTypes.ADD_NEW_MESSAGE);
const SET_USERNAME_QUERY:SetUsernameFunction = request_template(RequestTypes.SET_USERNAME);
const CREATE_ROOM_QUERY:CreateRoomFunction = request_template(RequestTypes.CREATE_ROOM);
const JOIN_TO_ROOM_QUERY:JoinToRoomFunction =request_template(RequestTypes.JOIN_TO_ROOM);

export {ADD_MESSAGE_TO_ROOM_QUERY,SET_USERNAME_QUERY,CREATE_ROOM_QUERY,JOIN_TO_ROOM_QUERY}