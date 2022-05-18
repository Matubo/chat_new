import React, {FC} from 'react';
import { IMessage } from '../../types/states/ChatRoomsTypes';
import MessageInput from './MessageInput';
import './MessageSection.css';

type MessageSectionProps={
    messages:IMessage[]|undefined,
    sendMessCallback:Function
}

const MessageDOM=(text:string,data:string,username:string)=>{
return(
    <div className="message">
        <p className="message__text">{text} {data} {username}</p>
    </div>
)
}

const MessageSection:FC<MessageSectionProps> = ({messages, sendMessCallback}) => {
    if(messages==undefined){
        return <div className="message-section"></div>
    }
    let messagesDOM=messages.map(message=>{
        const { text, date, username } = message;
        return MessageDOM(text, date, username)
    })
    
    return (
        <div className="message-section">
            <div className='message-section__messages'>
            {messagesDOM}
            </div>
            <MessageInput callback={(str:string)=>{sendMessCallback(str)}}></MessageInput>
        </div>
    );
};

export default MessageSection;