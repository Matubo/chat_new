import RoomCarousel from "../room_carousel/room_carousel";
import RoomJoinPanel from "../roomJoinPanel/room_join_panel";
import MessageContainer from "../message_container/message_container";
import ChatInput from "../chat_input/chat_input";
import { actions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { JOIN_TO_ROOM } from "../../queries/queries";

import "./chat_body.css";

const RCitems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
];

function ChatBody(props) {
  const chatRooms = useSelector((state) => state.chatRooms);
  const authorized = useSelector((state) => state.authorized);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  return (
    <div className="chat-body">
      <p className="chat-body__header">Chat</p>
      {/*  <Authorization /> */}
      <RoomCarousel
        items={chatRooms.rooms}
        changeRoom={(id) => dispatch(actions.changeRoom({ id }))}
      ></RoomCarousel>
      <RoomJoinPanel joinToRoom={JOIN_TO_ROOM}></RoomJoinPanel>
      <MessageContainer
        messages={
          chatRooms.currentRoomId
            ? chatRooms.rooms[chatRooms.currentRoomId].messages
            : []
        }
      ></MessageContainer>
      <ChatInput></ChatInput>
    </div>
  );
}

export default ChatBody;
