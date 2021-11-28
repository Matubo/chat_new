function MessageField(props) {
  const { messages } = props;
  console.log(messages);
  return (
    <div className="message-container">
      {messages.length ? (
        messages.map((elem) => {
          return (
            <p className="message-container_message">
              {elem.username}:{elem.text}:{elem.date}
            </p>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default MessageField;
