import React, {FC} from "react";
import "./App.css";
import {ADD_MESSAGE_TO_ROOM,CREATE_ROOM,JOIN_TO_ROOM,SET_USERNAME} from "./queries"

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          CREATE_ROOM();
        }}
      >create room</button>
            <button
        onClick={() => {
          ADD_MESSAGE_TO_ROOM({id:1,message:'Jopa'});
        }}
      >add mes</button>
            <button
        onClick={() => {
          JOIN_TO_ROOM({id:1});
        }}
      >join</button>
            <button
        onClick={() => {
          SET_USERNAME({username:'matthew'});
        }}
      >setus</button>
    </div>
  );
}

export default App;
