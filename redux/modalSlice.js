import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  activeModalData: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      console.log("CHECK ID:", actions.payload);
      state.activeModalDataId = actions.payload;
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.activeModalData = null;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
