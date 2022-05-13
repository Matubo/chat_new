import React, {FC} from 'react';
import { IChatRooms } from '../../types/states/ChatRoomsTypes';
import ChatElem from './ChatElem';
import './ChatList.css';

type ChatListProps={
    rooms:IChatRooms,
    createRoomFun:Function,
    changeRoomFun:Function
}

const ChatList:FC<ChatListProps> = ({rooms,createRoomFun,changeRoomFun}) => {

    let chatList = [];
    for (let roomId in rooms) {
        const {id,name,base64Image}=rooms[roomId]
        chatList.push(<ChatElem id={id} name={name} base64Image={base64Image} callback={()=>{changeRoomFun(id)}} key={id}></ChatElem>)
      }

    return (
        <div className='chat-list'>
            <ChatElem id='0' name='Добавить комнату' base64Image='' callback={()=>{createRoomFun()}} key='0'></ChatElem>
            {chatList}
        </div>
    );
};



export default ChatList