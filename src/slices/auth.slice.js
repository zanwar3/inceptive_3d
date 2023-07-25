import { createSlice } from "@reduxjs/toolkit";
import http from "@/config/http-common";
import { showLoader, hideLoader } from "@/slices/loader.slice";
import { setMessage } from "@/slices/message.slice";

import { saveUserData, saveToken } from "@/services/auth.service";
const initialState = {
  loading: true,
  error: false,
  user: [],
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setUser: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.errormsg = "";
      state.user = payload;
    },
    setError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { setLoading, setUser, setError } = authSlice.actions;

const { reducer } = authSlice;
export default reducer;

export const login = (body) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(showLoader());
      http
        .post("auth/login", JSON.stringify(body))
        .then((response) => {
          debugger;
          if (response.data.success) {
            dispatch(setUser(response.data.data.user));
            saveUserData(response.data.data.user);
            saveToken(response.data.data.tokens);
            dispatch(hideLoader());
            resolve(response.data);
          }
        })
        .catch((error) => {
          if (!error.response.data.success) {
            dispatch(setError());
            dispatch(hideLoader());
            dispatch(
              setMessage({
                msgType: "error",
                message: error.response.data.message,
              })
            );
          }
        });
    });
  };
};
