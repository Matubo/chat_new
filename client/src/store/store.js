import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authorization, {
  actions as authorizationActions,
} from "./reducers/authorization";
import chatRooms, { actions as chatActions } from "./reducers/chat_rooms";
import loading, { actions as loadingActions } from "./reducers/loading";
import rootSaga from "./middleware/root_saga";

const reducer = { chatRooms, authorization, loading };
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

const actions = { ...authorizationActions, ...loadingActions, ...chatActions };

export { actions };
export default store