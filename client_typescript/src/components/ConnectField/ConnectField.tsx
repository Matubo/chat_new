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
    <div className="connect-field">
      <input className="connect-field__input input" type="number" name="" value={room} onChange={changeInputHandler} />
      <button className="connect-field__button button" onClick={clickHandler}></button>
    </div>
  );
};

export default ConnectField;
