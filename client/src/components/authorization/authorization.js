import { useState } from "react";
import "./authorization.css";

function Authorization(props) {
  const [nickname, setNickname] = useState("");
  function changeHandler(e) {
    setNickname(e.target.value);
  }
  return (
    <div className="authorization-body">
      <div className="authorization-body__pop-up">
        <p className="authorization-body__pop-up-header">Вход в чат</p>
        <p className="authorization-body__pop-up-login">Введите nickname</p>
        <input
          className="authorization-body__pop-up__nickname-input"
          type="text"
          onChange={changeHandler}
          value={nickname}
        ></input>
        <button className="authorization-body__pop-up__authorization-button">
          Войти
        </button>
      </div>
    </div>
  );
}
export default Authorization;
