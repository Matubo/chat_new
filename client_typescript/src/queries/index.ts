import { RequestTypes } from '../types/queries/requests';
import { socket } from './IO';
import request from './requests/request';

const request_template=request(socket)

const ADD_MESSAGE_TO_ROOM = request_template(RequestTypes.ADD_NEW_MESSAGE);
const SET_USERNAME = request_template(RequestTypes.SET_USERNAME);
const CREATE_ROOM = request_template(RequestTypes.CREATE_ROOM);
const JOIN_TO_ROOM =request_template(RequestTypes.JOIN_TO_ROOM);

export {ADD_MESSAGE_TO_ROOM,SET_USERNAME,CREATE_ROOM,JOIN_TO_ROOM}