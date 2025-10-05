import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  isModalOpen: boolean;
};

const initialState: StateType = {
  isModalOpen: false,
};

const modalAddFood = createSlice({
  name: "addFood",
  initialState,
  reducers: {
    openModalAdd(state) {
      state.isModalOpen = true;
    },
    closeModalAdd(state) {
      state.isModalOpen = false;
    },
  },
});

export default modalAddFood.reducer;
export const { openModalAdd, closeModalAdd } = modalAddFood.actions;
