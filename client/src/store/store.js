import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authorization, {
  actions as authorizationActions,
} from "./reducers/authorization";
import chatRooms, { actions as chatRoomsActions } from "./reducers/chat_rooms";
import loading, { actions as loadingActions } from "./reducers/loading";
import rootSaga from "./middleware/root_saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { chatRooms, authorization, loading},
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

const actions = { ...authorizationActions, ...loadingActions, ...chatRoomsActions};

export { actions };
export default store;
