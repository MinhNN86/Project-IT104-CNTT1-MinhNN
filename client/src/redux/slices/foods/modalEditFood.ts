import { createSlice } from "@reduxjs/toolkit";
import type { Food } from "../../../interface/food.interface";

type StateType = {
  isModalOpen: boolean;
  editFood: Food | null;
};

const initialState: StateType = {
  isModalOpen: false,
  editFood: null,
};

const modalEditFood = createSlice({
  name: "editFood",
  initialState,
  reducers: {
    openModalEditFood(state, actions) {
      state.isModalOpen = true;
      state.editFood = actions.payload;
    },
    closeModalEditFood(state) {
      state.isModalOpen = false;
      state.editFood = null;
    },
  },
});

export default modalEditFood.reducer;
export const { openModalEditFood, closeModalEditFood } = modalEditFood.actions;
