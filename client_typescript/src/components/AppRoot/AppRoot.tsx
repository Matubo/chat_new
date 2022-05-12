import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import Authorization from "../Authorization/Authorization";
import "./AppRoot.css";
import { CREATE_ROOM_REQUEST, JOIN_TO_ROOM_REQUEST, SEND_MESSAGE, SET_USERNAME_REQUEST } from "../../queries";
import ConnectField from "../ConnectField/ConnectField";
import ChatList from "../ChatList/ChatList";
import { CHANGE_ROOM } from "../../store/action-creator/Actions";
import MessageSection from "../MessageSection/MessageSection";

const ChatApp: FC = () => {
  let { authorized } = useSelector((store: RootState) => store.authorization);
  let { rooms, currentRoom } = useSelector(
    (store: RootState) => store.chatRoom
  );
  let dispatch = useDispatch();

  if (!authorized) {
    return (
      <Authorization
        callback={(data: string) =>
          dispatch(SET_USERNAME_REQUEST({ username: data }))
        }
      />
    );
  } else {
    return (
      <>
        <ConnectField
          callback={(data: string) =>
            dispatch(JOIN_TO_ROOM_REQUEST({ id: data }))
          }
        ></ConnectField>
        <div className="chat-field-grid">
        <ChatList rooms={rooms} createRoomFun={()=>{CREATE_ROOM_REQUEST({})}} changeRoomFun={(id:string)=>dispatch(CHANGE_ROOM({id}))}></ChatList>
        {currentRoom?<MessageSection messages={rooms[currentRoom].messages} sendMessCallback={(message:string)=>{if(currentRoom){(SEND_MESSAGE({id:currentRoom,message}))}}}></MessageSection>:<></>}
        </div>
        <button style={{position:"absolute",top:0,right:0}} onClick={()=>{console.log({authorized,rooms,currentRoom})}}>console.log(store)</button>
        <button style={{position:"absolute",top:5,right:5}} onClick={()=>{JOIN_TO_ROOM_REQUEST({id:'1'})}}>join</button>
        <button style={{position:"absolute",top:10,right:10}} onClick={()=>{CREATE_ROOM_REQUEST({})}}>create</button>
      </>
    );
  }
};

export default ChatApp;
