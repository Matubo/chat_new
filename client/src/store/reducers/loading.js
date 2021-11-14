import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: "loading",
  initialState: { loading: false, error: false, errorMessage: null },
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.errorMessage = null;
    },
    finishLoading(state) {
      state.loading = false;
      state.errorMessage = null;
    },
    loadingError(state, action) {
      let { errMsg } = action.payload;
      state.error = true;
      state.errorMessage = errMsg;
    },
  },
});

export default loading.reducer;
export const actions = loading.actions;
