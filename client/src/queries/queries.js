import socket from "./socket";
import set_username from "./requests/set_username";
import add_message_to_room from "./requests/add_message_to_room";
import create_room from "./requests/create_room";
import join_to_room from "./requests/join_to_room";
import accept_create_room from "./responses/accept_create_room";
import accept_join_to_room from "./responses/accept_join_to_room";
import new_room_message from "./responses/new_messages_on_room";
import accept_set_username from "./responses/accept_set_username";
import store  from "../store/store";

const ADD_MESSAGE_TO_ROOM_QUERY = add_message_to_room(socket);
const SET_USERNAME_QUERY = set_username(socket);
const CREATE_ROOM_QUERY = create_room(socket);
const JOIN_TO_ROOM_QUERY = join_to_room(socket);

accept_create_room(socket)((data) => {
  store.dispatch({ type: "queries/accept_create_room", data });
});
accept_join_to_room(socket)((data) => {
  store.dispatch({ type: "queries/accept_join_to_room", data });
});
new_room_message(socket)((data) => {
  store.dispatch({ type: "queries/new_room_message", data });
});
accept_set_username(socket)((data) => {
  store.dispatch({ type: "queries/accept_set_username", data });
});

export { ADD_MESSAGE_TO_ROOM, SET_USERNAME, CREATE_ROOM, JOIN_TO_ROOM };
