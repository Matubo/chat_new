import { takeLatest } from "@redux-saga/core/effects";

const currentState = (store) => store;

function* test(...arr) {
  console.log(arr);
}

function* rootSaga(action) {
  yield takeLatest("queries/accept_create_room_success", test);
  yield takeLatest("queries/accept_join_to_room_success", test);
  yield takeLatest("queries/new_room_message_request", test);
  yield takeLatest("queries/accept_set_username_success", test);
}

export default rootSaga;
/* 
accept_create_room(socket)(() => {
    useDispatch({ type: "accept_create_room_success" });
  });
  accept_join_to_room(socket)(() => {
    useDispatch({ type: "accept_join_to_room_success" });
  });
  new_room_message(socket)(() => {
    useDispatch({ type: "new_room_message_request" });
  });
  accept_set_username(socket)(() => {
    useDispatch({ type: "accept_set_username_success" });
  }); */
