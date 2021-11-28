import "./App.css";
import ChatBody from "./components/chat_body/chat_body";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChatBody></ChatBody>
      </Provider>
    </div>
  );
}

export default App;
