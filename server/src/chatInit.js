import Message from "./chat_structure/message.js";
import Room from "./chat_structure/room.js";
import Chat from "./chat_structure/chat.js";

let ChatCopy = new Chat(Room, Message);

const ADD_MESSAGE_TO_ROOM = (data) => {
  const { id, username, message } = data;
  let result = ChatCopy.addMessageToRoom(id, username, message);
  return result;
};

const ADD_NEW_ROOM = () => {
  let result = ChatCopy.addNewRoom();
  return result;
};

const GET_ROOM_MESSAGES = (data) => {
  const { id } = data;
  let result = ChatCopy.getRoomById(id);
  if (result.status == true) {
    return { result: true, messages: result.room.getMessages };
  } else return { result: false };
};

const GET_LAST_ROOM_MESSAGES = (data) => {
  const { id, loaded_count } = data;
  let result = ChatCopy.getRoomById(id);
  if (result.status == true) {
    count = result.room.getMessagesCount() - loaded_count;
    return { status: true, messages: result.room.getLastRoomMessages(count) };
  } else return { result: false };
};

const GET_ROOM_BY_ID = (data) => {
  const { id } = data;
  let result = ChatCopy.getRoomById(id);
  return result;
};

export {
  ADD_MESSAGE_TO_ROOM,
  ADD_NEW_ROOM,
  GET_ROOM_MESSAGES,
  GET_LAST_ROOM_MESSAGES,
  GET_ROOM_BY_ID,
};
