import { useState } from "react";

function ChatInput(props) {
  const [message, setMessage] = useState("");
  function changeHandler(e) {
    setMessage(e.target.value);
  }
  return (
    <div className="chat-input">
      <input
        className="chat-input__input"
        type="text"
        onChange={changeHandler}
        value={message}
      ></input>
      <button className="chang-input__send" onClick={() => {}}>
        Отправить
      </button>
    </div>
  );
}

export default ChatInput;
