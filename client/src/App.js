import "./App.css";
import Authorization from "./components/authorization/authorization";
import ChatBody from "./components/chat_body/chat_body";
import ChatInput from "./components/chat_input/chat_input";
import MessageContainer from "./components/message_container/message_container";

function App() {
  return (
    <div className="App">
      {/*  <Authorization /> */}
      <ChatBody></ChatBody>
      <MessageContainer messages={[]}></MessageContainer>
      <ChatInput></ChatInput>
    </div>
  );
}

export default App;
