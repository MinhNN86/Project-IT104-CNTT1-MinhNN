import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../slices/sidebarSlices";
import modalEditFood from "../slices/foods/modalEditFood";
import modalAddFood from "../slices/foods/modalAddFood";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    addFood: modalAddFood,
    editFood: modalEditFood,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
