import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  isSidebarOpen: boolean;
};

const initialState: StateType = {
  isSidebarOpen: true,
};

const sidebarSlices = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
  },
});

export default sidebarSlices.reducer;
export const { openSidebar, closeSidebar } = sidebarSlices.actions;
