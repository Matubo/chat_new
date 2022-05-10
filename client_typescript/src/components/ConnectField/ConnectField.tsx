import React, { FC, useState } from "react";

type ConnectFieldPropTypes = {
  callback: Function;
};

const ConnectField: FC<ConnectFieldPropTypes> = ({ callback }) => {
  const [room, setRoom] = useState("");
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoom(e.target.value);
  };
  const clickHandler = () => {
    callback(room);
  };
  return (
    <div>
      <input type="number" name="" value={room} onChange={changeInputHandler} />
      <button onClick={clickHandler}></button>
    </div>
  );
};

export default ConnectField;
