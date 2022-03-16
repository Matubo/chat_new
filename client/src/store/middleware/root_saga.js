import { takeLatest, put, select } from "@redux-saga/core/effects";
import { actions } from "../store";

const currentRoomsState = (store) => store.chatRooms;

function* acceptJoinToRoom(res) {
  const { status, room } = res.data;
    if (status) {
    let currentRoomState = yield select(currentRoomsState);
    if (currentRoomState.rooms[`${room.id}`] == undefined) {
      yield put(actions.addRoom({ room: room, id: room.id }));
      if(currentRoomState.currentRoom==undefined){
        yield put(actions.changeRoom({id:room.id}))
      }
    }
  }
}

function* newRoomMessage(res) {
  const { status, id, message } = res.data;
  if (status) {
    yield put(actions.setNewMessage({ id, message }));
  }
}

function* acceptSetUsername(res) {
  const { status, username } = res.data;
  if (status) {
    yield put(actions.finishLoading());
    yield put(actions.logIn({ username }));
  }
}

function* rootSaga() {
  yield takeLatest("queries/accept_join_to_room", acceptJoinToRoom);
  yield takeLatest("queries/new_room_message", newRoomMessage);
  yield takeLatest("queries/accept_set_username", acceptSetUsername);
}

export default rootSaga;