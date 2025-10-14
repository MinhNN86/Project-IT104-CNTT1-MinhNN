import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  searchValue: string;
  sortType: "az" | "za";
  sortBy: string;
  category: string;
  myRecipesOnly: boolean;
};

const initialState: StateType = {
  searchValue: "",
  sortType: "az",
  sortBy: "",
  category: "",
  myRecipesOnly: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    updateSortType(state) {
      if (state.sortType === "az") {
        state.sortType = "za";
      } else {
        state.sortType = "az";
      }
    },
    updateSortBy(state, action) {
      state.sortBy = action.payload;
    },
    updateCategory(state, action) {
      state.category = action.payload;
    },
    updateMyRecipesOnly(state, action) {
      state.myRecipesOnly = action.payload;
    },
    resetFilter(state) {
      state.category = "";
      state.sortType = "az";
      state.searchValue = "";
      state.sortBy = "";
      state.myRecipesOnly = false;
    },
  },
});

export default filterSlice.reducer;
export const {
  updateCategory,
  updateSearchValue,
  updateSortBy,
  updateSortType,
  updateMyRecipesOnly,
  resetFilter,
} = filterSlice.actions;
