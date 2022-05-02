import React, { FC, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  CREATE_ROOM_REQUEST,
  JOIN_TO_ROOM_REQUEST,
  SEND_MESSAGE,
  SET_USERNAME_REQUEST,
} from "./queries";
import { CHANGE_ROOM } from "./store/action-creator/Actions";

export default function App() {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [room, setRoom] = useState("0");
  return (
    <div className="App">
      <button
        onClick={() => {
          CREATE_ROOM_REQUEST({});
        }}
      >
        create room
      </button>
      <button
        onClick={() => {
          SEND_MESSAGE({ id: "1", message: "Hellow there" });
        }}
      >
        add mess
      </button>
      <button
        onClick={() => {
          SET_USERNAME_REQUEST({ username: "Matthew" });
        }}
      >
        setuser
      </button>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          setRoom(e.target.value);
        }}
        value={room}
      />
      <button
        onClick={() => {
          JOIN_TO_ROOM_REQUEST({ id: room });
        }}
      >
        join
      </button>
      <button
        onClick={() => {
          dispatch(CHANGE_ROOM({ id: room }));
        }}
      >
        change room
      </button>
      <button
        onClick={() => {
          console.log(storeState);
        }}
      >
        store output
      </button>
    </div>
  );
}
