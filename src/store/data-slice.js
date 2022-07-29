import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { someData: [] },
  reducers: {
    userDataHandler(state, action) {
      state.someData = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
