import { useState } from "react";
import "./authorization.css";

function Authorization(props) {
  const {setUsername}=props;
  const [username, setUsernameInput] = useState("");
  function changeHandler(e) {
    setUsernameInput(e.target.value);
  }
  function setUsernameHandler(){
    setUsername(username)
  }

  return (
    <div className="authorization-body">
      <div className="authorization-body__pop-up">
        <p className="authorization-body__pop-up-header">Вход в чат</p>
        <p className="authorization-body__pop-up-login">Введите username</p>
        <input
          className="authorization-body__pop-up__username-input"
          type="text"
          onChange={changeHandler}
          value={username}
        ></input>
        <button className="authorization-body__pop-up__authorization-button" onClick={setUsernameHandler}>
          Войти
        </button>
      </div>
    </div>
  );
}
export default Authorization;
