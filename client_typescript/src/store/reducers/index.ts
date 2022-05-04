import { combineReducers } from "redux";
import { authorizationReducer } from "./Authorization";
import { chatRoomsReducer } from "./ChatRooms";
import { loadingReducer } from "./Loading";

export const reducer = combineReducers({
  chatRoom: chatRoomsReducer,
  loading: loadingReducer,
  authorization: authorizationReducer,
});

export type RootState = ReturnType<typeof reducer>;
