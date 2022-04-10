import { useState } from "react";
import "./room_join_panel.css";

function RoomJoinPanel(props) {
  const { joinToRoom, createRoom, roomID } = props;
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
          joinToRoom(room);
        }}
      >
        Присоединиться
      </button>
      <button
        className="room-join-panel__create-room-button"
        onClick={createRoom}
      >
        Создать новую
      </button>
      {roomID ? (
        <p className="room-join-panel__current-room">
          Сейчас вы в комнате {roomID}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default RoomJoinPanel;
