import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    show: true,
  },
  reducers: {
    showLoader: (state) => {
      state.show = true;
    },
    hideLoader: (state) => {
      state.show = false;
    },
  },
});

// Loader creators are generated for each case reducer function
export const { showLoader, hideLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
