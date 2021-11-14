import { takeLatest } from "@redux-saga/core/effects";

function* test(...arr) {
  console.log(arr);
}

function* rootSaga(action) {
  yield takeLatest("accept_create_room_success", test);
  yield takeLatest("accept_join_to_room_success", test);
  yield takeLatest("new_room_message_request", test);
  yield takeLatest("accept_set_username_success", test);
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
