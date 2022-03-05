import RoomCarousel from "../room_carousel/room_carousel";
import RoomJoinPanel from "../roomJoinPanel/room_join_panel";
import MessageContainer from "../message_container/message_container";
import ChatInput from "../chat_input/chat_input";
import Authorization from "../authorization/authorization";
import { actions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  JOIN_TO_ROOM,
  ADD_MESSAGE_TO_ROOM,
  CREATE_ROOM,
  SET_USERNAME,
} from "../../queries/queries";

import "./chat_body.css";

function ChatBody(props) {
  const {rooms,currentRoomId} = useSelector((state) => state.chatRooms);
  const {authorized, userId} = useSelector((state) => state.authorization);
  const dispatch = useDispatch();
  return (
    <div className="chat-body">
      <h1 className="chat-body__header">CHAT APP...</h1>
      <div className="chat-body__content">
        {authorized ? (
          <>
            <RoomCarousel
              items={rooms}
              changeRoom={(id) => dispatch(actions.changeRoom({ id }))}
            ></RoomCarousel>
            <RoomJoinPanel
              joinToRoom={JOIN_TO_ROOM}
              createRoom={CREATE_ROOM}
            ></RoomJoinPanel>
            <MessageContainer
              messages={
                currentRoomId
                  ? rooms[currentRoomId].messages
                  : []
              }
              userId={userId}
            ></MessageContainer>
            <ChatInput
              sendMessage={(message) => {
                ADD_MESSAGE_TO_ROOM(currentRoomId, message);
              }}
            ></ChatInput>
          </>
        ) : (
          <Authorization setUsername={SET_USERNAME} />
        )}
      </div>
    </div>
  );
}

export default ChatBody;
