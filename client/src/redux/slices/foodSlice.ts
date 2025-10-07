import { createSlice } from "@reduxjs/toolkit";
import type { Food } from "../../interface/food.interface";
import { getAllFood } from "../../apis/food.api";

type FoodInitial = {
  status: "idle" | "pending" | "success" | "failed";
  data: Food[];
  error: undefined | string;
};

const initialState: FoodInitial = {
  status: "idle",
  data: [],
  error: undefined,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllFood.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export default foodSlice.reducer;
