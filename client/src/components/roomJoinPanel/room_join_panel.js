import { useState } from "react";
import "./room_join_panel.css";
import Test from "../test";
import store, { actions } from "../../store/store";
import { Provider } from "react-redux";
import { JOIN_TO_ROOM } from "../../queries/queries";

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
      <button
        className="room-join-panel__join-button"
        onClick={() => {
          JOIN_TO_ROOM(room);
        }}
      >
        Присоединиться
      </button>
      <Provider store={store}>
        <Test></Test>
      </Provider>
    </div>
  );
}

export default RoomJoinPanel;
