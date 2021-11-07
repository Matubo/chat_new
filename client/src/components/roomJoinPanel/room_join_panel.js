import { useState } from "react";
import "./room_join_panel.css";
import Test from "../test";

function RoomJoinPanel(props) {
  const [room, setRoom] = useState(0);
  function changeHandler(e) {
    setRoom(e.target.value);
  }
  return (
    <div className="room-join-panel">
      <p className="room-join-panel__header">Введите комнату для подключения</p>
      <input
        className="room-join-panel__room-input"
        type="number"
        onChange={changeHandler}
        value={room}
      ></input>
      <button className="room-join-panel__join-button" onClick={() => {}}>
        Присоединиться
      </button>
      <Test></Test>
    </div>
  );
}

export default RoomJoinPanel;
