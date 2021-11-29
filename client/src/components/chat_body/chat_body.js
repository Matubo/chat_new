import RoomCarousel from "../room_carousel/room_carousel";
import RoomJoinPanel from "../roomJoinPanel/room_join_panel";
import MessageContainer from "../message_container/message_container";
import ChatInput from "../chat_input/chat_input";
import Authorization from '../authorization/authorization';
import { actions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { JOIN_TO_ROOM, ADD_MESSAGE_TO_ROOM, CREATE_ROOM,SET_USERNAME } from "../../queries/queries";

import "./chat_body.css";

function ChatBody(props) {
  const chatRooms = useSelector((state) => state.chatRooms);
  const authorization = useSelector((state) => state.authorization);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  return (
    <div className="chat-body">
      <p className="chat-body__header">Chat</p>
      {authorization.authorized?(<>
      <RoomCarousel
        items={chatRooms.rooms}
        changeRoom={(id) => dispatch(actions.changeRoom({ id }))}
      ></RoomCarousel>
      <RoomJoinPanel joinToRoom={JOIN_TO_ROOM} createRoom={CREATE_ROOM}></RoomJoinPanel>
      <MessageContainer
        messages={
          chatRooms.currentRoomId
            ? chatRooms.rooms[chatRooms.currentRoomId].messages
            : []
        }
      ></MessageContainer>
      <ChatInput sendMessage={(message)=>{ADD_MESSAGE_TO_ROOM(chatRooms.currentRoomId,message)}}></ChatInput></>
    ):(<Authorization setUsername={SET_USERNAME} />)
  }
  </div>
  );
}

export default ChatBody;
