import React, {FC, useState} from 'react';
import { IChatRooms } from '../../types/states/ChatRoomsTypes';
import ChatElem from './ChatElem';
import './ChatList.css';

type ChatListProps={
    rooms:IChatRooms,
    currentRoom:string|null,
    createRoomFun:Function,
    changeRoomFun:Function,
    connectRoomFun:Function
}

const ConnectBlock = function({connect,create}:{connect:Function,create:Function}){
const [value,setValue]=useState('0');

function onChangeHandler(e:React.ChangeEvent<HTMLInputElement>){
    setValue(e.target.value)
}

    return(  
        <div className='connect-field'>
           <input type="number" name="connect" onChange={onChangeHandler}/>
           <button onClick={()=>connect(value)}>connect</button>
           <button onClick={()=>create()}>create</button>
       </div>
    )
   }

const ChatList:FC<ChatListProps> = ({rooms,createRoomFun,changeRoomFun,currentRoom,connectRoomFun}) => {

    let chatList = [];
    for (let roomId in rooms) {
        const {id,name,base64Image}=rooms[roomId]
        chatList.push(<ChatElem id={id} name={name} base64Image={base64Image} self={roomId==currentRoom?true:false} callback={()=>{changeRoomFun(id)}} key={id}></ChatElem>)
      }

    return (
        <div className='left-block'>
            <ConnectBlock connect={connectRoomFun} create={createRoomFun}></ConnectBlock>
        <div className='chat-list'>   
            {chatList}
        </div>
        </div>
    );
};



export default ChatList