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
  /*   useContext(() => {
    set_placeholder(refElem.current);
  }, []); */
  return (
    <div className="chat-input">
      {/*       <input
        className="chat-input__input"
        type="text"
        scrolling='yes'
        onChange={changeHandler}
        value={message}
<<<<<<< HEAD
      ></input>
      <div contenteditable="true" onChange={changeHandler}>{message}</div>
      <button className="chang-input__send" onClick={sendMessageHandler}>
=======
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
        value={message}
      >
>>>>>>> b3b309df7a4ac75ec41e358d784aec215a996484
        Отправить
      </button>
    </div>
  );
}

export default ChatInput;
