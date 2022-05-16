import "./App.css";
import { store } from "./store/store";
import {Provider } from "react-redux";
import AppRoot from "./components/AppRoot/AppRoot";
import logo from './assets/img/bubble-chat.png';

export default function App()  {
  return (
    <div className="App">
        <Provider store={store}>
         <AppRoot></AppRoot>
      </Provider>
    </div>
  );
}
