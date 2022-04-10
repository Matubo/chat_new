import { useRef, useEffect } from "react";
import "./message_container.css";

function MessageField(props) {
  const { messages, userId, roomID } = props;
  const PenultMessRef = useRef(null);
  const LastMessRef = useRef(null);

  useEffect(() => {
    return function () {
      if (PenultMessRef.current != null) {
        if (
          window.pageYOffset +
            PenultMessRef.current.getBoundingClientRect().top <
          window.pageYOffset + document.documentElement.clientHeight
        ) {
          LastMessRef.current.scrollIntoView();
        }
      }
    };
  });

  useEffect(() => {
    return () => {
      if (PenultMessRef.current != null) {
        LastMessRef.current.scrollIntoView();
      }
    };
  }, [roomID]);

  return (
    <div className="message-container">
      {messages.length > 0 ? (
        messages.map((elem, index) => {
          return (
            <div
              ref={
                index == messages.length - 2
                  ? PenultMessRef
                  : index == messages.length - 1
                  ? LastMessRef
                  : undefined
              }
              className={
                userId == elem.username
                  ? "message-container_message self-message"
                  : "message-container_message"
              }
              key={index}
            >
              <p className="message-container_message_text">{elem.text}</p>
              <p className="message-container_message_info">
                {elem.username} - {elem.date}
              </p>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default MessageField;
