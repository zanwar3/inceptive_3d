import { configureStore } from "@reduxjs/toolkit";
import {
  actionReducer,
  envReducer,
  modelReducer,
  containerReducer,
  loaderReducer,
  messageReducer,
  authReducer,
} from "@/slices";

// ***************************************************

const reducer = {
  action: actionReducer,
  env: envReducer,
  model: modelReducer,
  container: containerReducer,
  loader: loaderReducer,
  message: messageReducer,
  auth: authReducer,
};

// ***************************************************

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
