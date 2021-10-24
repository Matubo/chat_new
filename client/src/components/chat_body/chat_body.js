import RoomCarousel from "../room_carousel/room_carousel";
import RoomJoinPanel from "../roomJoinPanel/room_join_panel";
import MessageContainer from "../message_container/message_container";
import ChatInput from "../chat_input/chat_input";

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
  return (
    <div className="chat-body">
      <p className="chat-body__header">Chat</p>
      <RoomCarousel items={RCitems}></RoomCarousel>
      <RoomJoinPanel></RoomJoinPanel>
      <MessageContainer messages={[]}></MessageContainer>
      <ChatInput></ChatInput>
    </div>
  );
}

export default ChatBody;
