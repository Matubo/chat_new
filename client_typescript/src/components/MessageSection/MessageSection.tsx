import React, {FC, useState} from 'react';
import { IMessage } from '../../types/states/ChatRoomsTypes';
import MessageInput from './MessageInput';

type MessageSectionProps={
    messages:IMessage[],
    sendMessCallback:Function
}

const MessageDOM=(text:string,data:string,username:string)=>{
return(
    <div className="message">
        <p className="message__text">{text} {data} {username}</p>
    </div>
)
}

const MessageSection:FC<MessageSectionProps> = ({messages,sendMessCallback}) => {
    const [inputText,setInputText]=useState('')
    const changeInputHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputText(e.target.value)
    }

    let messagesDOM=messages.map(message=>
        MessageDOM(message.text,message.date,message.username)
    )
    return (
        <div className='message-section'>
            {messagesDOM}
{/*             <input value={inputText} onChange={changeInputHandler}></input>
            <button onClick={()=>sendMessCallback(inputText)}>send</button>  */}
            <MessageInput callback={(str:string)=>{sendMessCallback(str)}}></MessageInput>
        </div>
    );
};

export default MessageSection;