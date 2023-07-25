import { createSlice } from "@reduxjs/toolkit";

export const containerSlice = createSlice({
  name: "container",
  initialState: {
    value: "canvas",
  },
  reducers: {
    setContainer: (state, container) => {
      return container.payload;
    },
    getContainer: (state) => {
      return state;
    },
  },
});

// container creators are generated for each case reducer function
export const { setContainer, getContainer } = containerSlice.actions;

export default containerSlice.reducer;
