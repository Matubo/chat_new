import { createSlice } from "@reduxjs/toolkit";

const chatRooms = createSlice({
  name: "chatRooms",
  initialState: {
    rooms: {},
    currentRoom: null,
  },
  reducers: {
    addRoom(state, action) {
      console.log(actions);
      const { room, id } = action.payload;
      state.rooms[id] = room;
    },
    changeRoom(state, action) {
      const { id } = action.payload;
      state.currentRoom = state.rooms[id];
    },
    setNewMessage(state, action) {
      const { id, message } = action.payload;
      state.rooms[id].messages.push(message);
    },
  },
});

export default chatRooms.reducer;
export const actions = chatRooms.actions;
