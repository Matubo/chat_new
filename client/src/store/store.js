import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import chat_rooms from "./reducers/chat_rooms";
import authorized from "./reducers/authorization";
import loading from "./reducers/loading";
import rootSaga from "./middleware/root_saga";

/* const initialStore = {
  isLoading: false,
  authorized: false,
  currentRoom: null,
  userId: null,
  rooms: [],
}; */
 
const reducer = { chat_rooms, authorized, loading };
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];
const store = configureStore({
  reducer,
  middleware,
});
sagaMiddleware.run(rootSaga);

export default store;
