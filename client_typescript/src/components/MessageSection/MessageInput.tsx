import React, {FC, useRef} from 'react';
import send from '../../assets/img/send.png'
import './MessageInput.css';

type MessageInputProps={
    callback:Function
}

function strHaveAnyMeaningfulSymbols(str:string){
if(str.match(/\S/i)!=null) return true
else return false

}

function cleanStrWhitespace(str:string){
  return str.replace(/[^\S]+/,'').replace(/[^\S]+$/,''); 
}

const MessageInput:FC<MessageInputProps> = ({callback}) => {
    const inpRef = useRef<HTMLDivElement>(null);
    const MAX_LENGTH=1000;
    
    function sendMessageHandler() {
      let textContent=(inpRef.current as HTMLInputElement).innerText;
      if(textContent!=null){
      if(textContent.length>0 && strHaveAnyMeaningfulSymbols(textContent)){
       /*  textContent=cleanStrWhitespace(textContent); */
        callback(textContent);
         (inpRef.current as HTMLInputElement).innerText = ""; 
      }}}
 
      const onKeyDownHandler= function (e:React.KeyboardEvent<HTMLDivElement>){
        const currentTextLength = (e.target as HTMLInputElement).innerText.length;
        if (currentTextLength === MAX_LENGTH && e.keyCode !== 8) {
            e.preventDefault();
        }
      }
 
      return (
    <div className="send-field">    
      <div
        className="send-field__input input"
        contentEditable="true"
        ref={inpRef}
        placeholder="Text here.."
        onKeyDown={onKeyDownHandler}
      ></div>
      <button className="send-field__button button" onClick={sendMessageHandler}>
        <img src={send} className='send-field__button-icon' alt="#"></img>
      </button>
    </div>
    );
}

export default MessageInput;