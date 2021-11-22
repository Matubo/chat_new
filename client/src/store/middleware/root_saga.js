import { takeLatest, put } from "@redux-saga/core/effects";
import { actions } from "../store";

/* const {startLoading,finishLoading,logIn,logOut,addRoom,changeRoom} = actions  */
const currentState = (store) => store;

function* test(...arr) {
  console.log(arr);
}

function* acceptJoinToRoom(res) {
  const { data } = res;
  console.log(data);
  if (data.status) {
    console.log(data);
  }
}

function* newRoomMessage(res) {
  const { data } = res;
  if (data.status) {
    console.log(data);
  }
}

function* acceptSetUsername(res) {
  const { status, username } = res.data;
  if(status){
    yield put(actions.finishLoading());
    console.log(actions.logIn({username}))
    yield put(actions.logIn({username}));
  }
/*   console.log(data)
  if (data.status) {
    console.log(data);
  }
  */
} 

function* rootSaga(action) {
  yield takeLatest("queries/accept_create_room", test);
  yield takeLatest("queries/accept_join_to_room", acceptJoinToRoom);
  yield takeLatest("queries/new_room_message", newRoomMessage);
  yield takeLatest("queries/accept_set_username", acceptSetUsername);
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
