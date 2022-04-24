import React from "react";
import "./App.css";
import fun from "./queries/io";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          fun();
        }}
      ></button>
    </div>
  );
}

export default App;
