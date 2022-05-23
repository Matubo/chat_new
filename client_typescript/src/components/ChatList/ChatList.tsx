import React, { FC, useState } from "react";
import { IChatRooms } from "../../types/states/ChatRoomsTypes";
import ChatElem from "./ChatElem";
import "./ChatList.css";
import ConnectionField from './ConnectionField';

type ChatListProps = {
  rooms: IChatRooms;
  currentRoom: string | null;
  createRoom: Function;
  changeRoom: Function;
  connectToRoom: Function;
};

const ChatList: FC<ChatListProps> = ({
  rooms,
  createRoom,
  changeRoom,
  currentRoom,
  connectToRoom,
}) => {
  let chatList = [];
  for (let roomId in rooms) {
    const { id, name, base64Image } = rooms[roomId];
    chatList.push(
      <ChatElem
        id={id}
        name={name}
        base64Image={base64Image}
        self={roomId == currentRoom ? true : false}
        callback={() => {
          changeRoom(id);
        }}
        key={id}
      ></ChatElem>
    );
  }

  return (
      <div className="chat-list">
        <ConnectionField
          connect={connectToRoom}
          create={createRoom}
        ></ConnectionField>
        {chatList}
      </div>
  );
};

export default ChatList;
