import "./App.css";
import { store } from "./store/store";
import {Provider } from "react-redux";
import AppRoot from "./components/AppRoot/AppRoot";
import logo from './assets/img/bubble-chat.png';

export default function App()  {
  return (
    <div className="App">
        <Provider store={store}>
        <div className='chatApp_header'>
            <img className='chatApp_header__icon' src={logo} alt='*'></img>
            <h1 className='chatApp_header__text'>Chat APP</h1>
            </div>
          {/* <StoreTest></StoreTest> */}
         <AppRoot></AppRoot>
      </Provider>
    </div>
  );
}
