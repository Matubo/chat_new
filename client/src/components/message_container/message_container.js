import "./message_container.css";

function MessageField(props) {
  const { messages, userId } = props;
  return (
    <div className="message-container">
      {messages.length>0 ? (
        messages.map((elem, index) => {
          return (
            <div
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
