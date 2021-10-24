import "./App.css";
import Authorization from "./components/authorization/authorization";
import ChatBody from "./components/chat_body/chat_body";

//data - messages, rooms; methods- send message, join to room , change room 

function App() {
  return (
    <div className="App">
      {/*  <Authorization /> */}
      <ChatBody></ChatBody>
    </div>
  );
}

export default App;
