import store from "../store/store";
import {
  ADD_MESSAGE_TO_ROOM,
  SET_USERNAME,
  CREATE_ROOM,
  JOIN_TO_ROOM,
} from "../queries/queries";

export default function Test() {
  /* const [authorised] = store.getState(); */
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
      <div></div>
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
    </>
  );
}
