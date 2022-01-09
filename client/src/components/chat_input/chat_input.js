import { useState, useRef } from "react";
import "./chat_input.css";

function ChatInput(props) {
  const { sendMessage } = props;
  const [message, setMessage] = useState("");
  const inpRef = useRef("");
  function changeHandler(e) {
    setMessage(e.target.textContent);
  }
  function sendMessageHandler() {
    if (message.length > 0) {
      sendMessage(message);
      setMessage("");
      inpRef.current.textContent = "";
    }
  }
  return (
    <div className="chat-input">
      <div
        className="test"
        type="text"
        contenteditable="true"
        placeholder="Text here.."
        value={message}
        ref={inpRef}
        onInput={changeHandler}
      ></div>
      <button className="chang-input__send" onClick={sendMessageHandler}>
        Отправить
      </button>
    </div>
  );
}

export default ChatInput;
