import { createSlice } from "@reduxjs/toolkit";

const authorized = createSlice({
  name: "authorized",
  initialState: {
    authorized: false,
    userId: null,
  },
  reducers: {
    logIn(state, action) {
      const { userId } = action.payload;
      state.authorized = true;
      state.userId = userId;
    },
    logOut(state) {
      state.authorized = false;
      state.userId = null;
    },
  },
});

export default authorized.reducer;
export const actions = authorized.actions;
