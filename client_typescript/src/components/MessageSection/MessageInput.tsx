import {FC, useRef} from 'react';
import send from '../../assets/img/send.png'
import './MessageInput.css';

type MessageInputProps={
    callback:Function
}

const MessageInput:FC<MessageInputProps> = ({callback}) => {
    const inpRef = useRef<HTMLDivElement>(null);
    function sendMessageHandler() {
      let textContent=(inpRef.current as HTMLInputElement).innerText;
      if(textContent!=null){
      if(textContent.length>0){
        callback(textContent);
         (inpRef.current as HTMLInputElement).innerText = ""; 
      }}}
    return (
    <div className="send-field">    
      <div
        className="send-field__input input"
        contentEditable="true"
        placeholder="Text here.."
        ref={inpRef} 
      ></div>
      <button className="send-field__button button" onClick={sendMessageHandler}>
        <img src={send} className='send-field__button-icon' alt="#"></img>
      </button>
    </div>
    );
}

export default MessageInput;