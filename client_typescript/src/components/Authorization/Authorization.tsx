import React, { FC, useState } from "react";
import './Authorization.css';

type AuthorizationWindowPropTypes = {
  authorization: Function;
};

const AuthorizationWindow: FC<AuthorizationWindowPropTypes> = ({
  authorization,
}) => {
  
  const [user, setUser] = useState("");

  const clickHandler = () => {
    if (user.length > 2) {
      authorization(user);
    }
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  return (
    <div className="authorization">
      <p className="authorization__header">Введите имя:</p>
      <input
        type="text"
        className="authorization__input input"
        value={user}
        onChange={changeInputHandler}
      />
      <button className="authorization__button button" onClick={clickHandler}>Вход</button>
    </div>
  );
};

export default AuthorizationWindow;
