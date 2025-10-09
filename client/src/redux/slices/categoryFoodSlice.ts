import { createSlice } from "@reduxjs/toolkit";
import type { FoodCategory } from "../../interface/foodCategory.interface";
import { getAllCategoryFood } from "../../apis/categoryFood.api";

type StateType = {
  status: "idle" | "pending" | "success" | "failed";
  data: FoodCategory[];
  error: undefined | string;
};

const initialState: StateType = {
  status: "idle",
  data: [],
  error: undefined,
};

const categoryFoodSlice = createSlice({
  name: "categoryFood",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllCategoryFood.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default categoryFoodSlice.reducer;
