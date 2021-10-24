function MessageField(props) {
  const { messages } = props;
  return (
    <div className="message-container">
      {messages.length ? (
        messages.map((elem) => {
          return <p className="message-container_message">{elem}</p>;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default MessageField;
