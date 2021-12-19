import { useState, useContext, useRef } from "react";
import "./chat_input.css";
import set_placeholder from "./placeholder_handler";

function ChatInput(props) {
  const { sendMessage } = props;
  const [message, setMessage] = useState("");
  const refElem = useRef(null);
  function changeHandler(e) {
    setMessage(e.target.textContent);
  }
  function sendMessageHandler() {
    if (message.length > 0) {
      sendMessage(message);
      setMessage("");
    }
  }
  useContext(() => {
    set_placeholder(refElem);
  }, []);
  return (
    <div className="chat-input">
      {/*       <input
        className="chat-input__input"
        type="text"
        onChange={changeHandler}
        value={message}
      ></input> */}
      <div
        type="text"
        contenteditable="true"
        ref={refElem}
        onInput={(e) => {
          changeHandler(e);
        }}
        
      ></div>
      <button
        className="chang-input__send"
        data-placeholder="Text here"
        onClick={sendMessageHandler}
      >
        Отправить
      </button>
    </div>
  );
}

export default ChatInput;
