import socket from "./socket";
import set_username from "./requests/set_username";
import add_message_to_room from "./requests/add_message_to_room";
import create_room from "./requests/create_room";
import join_to_room from "./requests/join_to_room";
import accept_create_room from "./responces/accept_create_room";
import accept_join_to_room from "./responces/accept_join_to_room";
import new_room_message from "./responces/new_messages_on_room";
import accept_set_username from "./responces/accept_set_username";

const ADD_MESSAGE_TO_ROOM = add_message_to_room(socket);
const SET_USERNAME = set_username(socket);
const CREATE_ROOM = create_room(socket);
const JOIN_TO_ROOM = join_to_room(socket);

accept_create_room(socket)(console.log);
accept_join_to_room(socket)(console.log);
new_room_message(socket)(console.log);
accept_set_username(socket)(console.log);

export { ADD_MESSAGE_TO_ROOM, SET_USERNAME, CREATE_ROOM, JOIN_TO_ROOM };
