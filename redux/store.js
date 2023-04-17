import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});
