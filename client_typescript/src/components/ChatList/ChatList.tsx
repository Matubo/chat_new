import { FC } from "react";
import { IChatRooms } from "../../types/states/ChatRoomsTypes";
import ChatElem from "./ChatElem";
import "./ChatList.css";
import ConnectionField from './ConnectionField';

type chatListDOMProps = {
  rooms: IChatRooms;
  currentRoom: string | null;
  createRoom: Function;
  changeRoom: Function;
  connectToRoom: Function;
};

const chatListDOM: FC<chatListDOMProps> = ({
  rooms,
  createRoom,
  changeRoom,
  currentRoom,
  connectToRoom,
}) => {

  let chatListDOM = [];
  for (let roomId in rooms) {
    const { id, name, base64Image } = rooms[roomId];
    chatListDOM.push(
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
      {chatListDOM}
    </div>
  );
};

export default chatListDOM;
