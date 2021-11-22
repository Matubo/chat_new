import store,{ actions } from "../store/store";
import {
  ADD_MESSAGE_TO_ROOM,
  SET_USERNAME,
  CREATE_ROOM,
  JOIN_TO_ROOM,
} from "../queries/queries";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  function test() {
    console.log(store.getState());
  }
  store.subscribe(() => {
    console.log(store.getState());
  });
  function load() {
    store.dispatch({ type: "START_LOADING" });
  }
  return (
    <>
      <div>
        <p>Server tests</p>
        <button onClick={test}>Test</button>
        <button onClick={load}>loading</button>
        <button
          onClick={() => {
            SET_USERNAME("Matthew");
          }}
        >
          username
        </button>
        <button
          onClick={() => {
            CREATE_ROOM();
          }}
        >
          create
        </button>
        <button
          onClick={() => {
            JOIN_TO_ROOM(1);
          }}
        >
          join
        </button>
        <button
          onClick={() => {
            ADD_MESSAGE_TO_ROOM(1, "Idi naxoi");
          }}
        >
          send
        </button>
      </div>
      <div>
        <p>Store tests</p>
        <button
          onClick={() => {
            dispatch(actions.startLoading());
          }}
        >
          startLoading
        </button>
        <button
          onClick={() => {
            dispatch(actions.finishLoading());
          }}
        >
          finishLoading
        </button>
        <button
          onClick={() => {
            dispatch(actions.loadingError({ errMsg: "eby sobak" }));
          }}
        >
          onError
        </button>
        <button
          onClick={() => {
            dispatch(actions.logIn({ username: "Matthew" }));
          }}
        >
          LogIn
        </button>
        <button
          onClick={() => {
            dispatch(actions.logOut());
          }}
        >
          LogOut
        </button>
        <button
          onClick={() => {
            dispatch(
              actions.addRoom({ id: 1, room: { message: ["idi nahoi"] } })
            );
          }}
        >
          Add room1
        </button>
        <button
          onClick={() => {
            dispatch(
              actions.addRoom({ id: 2, room: { messages: ["idi nahoi"] } })
            );
          }}
        >
          Add room2
        </button>
        <button
          onClick={() => {
            dispatch(actions.setNewMessage({ id: 2, message: "Pidor" }));
          }}
        >
          setNewMessage
        </button>
        <button
          onClick={() => {
            dispatch(actions.changeRoom({ id: 2 }));
          }}
        >
          changeRoom
        </button>
      </div>
    </>
  );
}
