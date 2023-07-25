import { createSlice } from "@reduxjs/toolkit";

import ENV_LIST, { STUDIO_PLANE } from "@/constants/env.constants";
import { sessionStorageService } from "@/services";

const envSwitch = (envName) => {
  let result = STUDIO_PLANE;
  ENV_LIST.forEach((element) => {
    if (element.name == envName) {
      result = element;
    }
  });

  return result;
};

const environment = envSwitch(
  sessionStorageService.loadLocalEnvironmentValue()
);

export const environmentSlice = createSlice({
  name: "env",
  initialState: environment,
  reducers: {
    setEnvironment: (state, action) => {
   
      sessionStorageService.setLocalEnvironmentValue(action?.payload);
      return action.payload;
    },
    resetEnvironment: (state) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEnvironment, resetEnvironment } = environmentSlice.actions;

export default environmentSlice.reducer;
