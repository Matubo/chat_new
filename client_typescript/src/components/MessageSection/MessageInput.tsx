import React, {FC, useRef,useState} from 'react';
import './MessageInput.css';

type MessageInputProps={
    callback:Function
}

const MessageInput:FC<MessageInputProps> = ({callback}) => {
    const inpRef = useRef<HTMLDivElement>(null);
    const [message,setMessage]=useState("");
    function changeHandler(e:React.ChangeEvent<HTMLDivElement>){
        setMessage(e.target.innerText)
    }
    function sendMessageHandler() {
        let textContent=(inpRef.current as HTMLInputElement).innerText;
        callback(message);
         (inpRef.current as HTMLInputElement).textContent = ""; 
      }
    return (
    <div className="send-field">    
      <div
        className="send-field__input input"
        /* type="text"  */
        contentEditable="true"
        placeholder="Text here.."
        ref={inpRef} 
         onInput={changeHandler} 
      ></div>
      <button className="send-field__button button" onClick={sendMessageHandler}>
        <img></img>
      </button>
    </div>
    );
}

export default MessageInput;