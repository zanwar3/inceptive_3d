import { createSlice } from "@reduxjs/toolkit";

import { BOARD_APE } from "@/constants/models.constant";
import { sessionStorageService } from "@/services";

import MODEL_LIST from "@/constants/models.constant";

const modelSwitch = (modelName) => {
  let result = BOARD_APE;
  MODEL_LIST.forEach((element) => {
    if (element.name == modelName) {
      result = element;
    }
  });

  return result;
};

const model = modelSwitch(sessionStorageService.loadLocalModelValue());

export const modelSlice = createSlice({
  name: "model",
  initialState: model,
  reducers: {
    setModel: (state, action) => {
      sessionStorageService.setLocalModelValue(action?.payload?.name);
      return action.payload;
    },

    getModel: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModel, getModel } = modelSlice.actions;

export default modelSlice.reducer;
