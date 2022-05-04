import "./App.css";
import { store } from "./store/store";
import {Provider } from "react-redux";
import StoreTest from "./components/StoreTest";
import AppRoot from "./components/AppRoot/AppRoot";

export default function App()  {
  return (
    <div className="App">
        <Provider store={store}>
          {/* <StoreTest></StoreTest> */}
         <AppRoot></AppRoot>
      </Provider>
    </div>
  );
}
