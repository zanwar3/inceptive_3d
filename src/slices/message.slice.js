import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    msgType: "",
    message: "",
  },
  reducers: {
    setMessage: (state, action) => {
      
      return action.payload;
    },
  },
});

// message creators are generated for each case reducer function
export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
