import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "action",
  initialState: {
    name: "T-Pose",
    type: "Pose",
  },
  reducers: {
    setAction: (state, action) => {
      return action.payload;
    },
    getAction: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAction, getAction } = actionSlice.actions;

export default actionSlice.reducer;
