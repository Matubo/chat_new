import React, {FC} from 'react';
import { IChatRoom, IChatRooms } from '../../types/states/ChatRoomsTypes';

type ChatListProps={
    rooms:IChatRooms,
    callback?:Function|undefined
}

const ChatElement   = (room:IChatRoom)=>{
    return (
        <div className="chat-list__elem" key={room.id}>
            <img src={`data:image/jpeg;base64,${room.base64Image}`}></img>
            <p>{room.id} - {room.name}</p>
        </div>
    )
}

type AddChatProps={
    callback:Function
}

const AddChat = ({callback}:AddChatProps)=>{
    return (
        <div className="chat-list__elem">
            <img></img>
            <p>Добавить чат</p>
        </div>
    )
}

const ChatList:FC<ChatListProps> = ({rooms,callback=undefined}) => {

    let list = [];
    for (let room in rooms) {
        list.push(ChatElement(rooms[room]))
      }


    return (
        <div className='chat-list'>
            {callback?<AddChat callback={callback}></AddChat>:<></>}
            {list}
        </div>
    );
};



export default ChatList