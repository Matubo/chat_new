import { useState } from "react";
import "./chat_input.css";

function ChatInput(props) {
  const {sendMessage}=props;
  const [message, setMessage] = useState("");
  function changeHandler(e) {
    setMessage(e.target.value);
  }
  function sendMessageHandler(){
    if(message.length>0){
    sendMessage(message)
    setMessage('');
    }
  }
  return (
    <div className="chat-input">
      <input
        className="chat-input__input"
        type="text"
        scrolling='yes'
        onChange={changeHandler}
        value={message}
      ></input>
      <div contenteditable="true" onChange={changeHandler}>{message}</div>
      <button className="chang-input__send" onClick={sendMessageHandler}>
        Отправить
      </button>
    </div>
  );
}

export default ChatInput;
