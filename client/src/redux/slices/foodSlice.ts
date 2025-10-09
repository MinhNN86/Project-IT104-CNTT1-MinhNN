import { createSlice } from "@reduxjs/toolkit";
import type { Food } from "../../interface/food.interface";
import { addFood, getAllFood, updateFood } from "../../apis/food.api";

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
    builder
      .addCase(getAllFood.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(addFood.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateFood.fulfilled, (state, action) => {
        const updatedFood = action.payload;
        state.data = state.data.map((food) =>
          food.id === updatedFood.id ? updatedFood : food
        );
      });
  },
});

export default foodSlice.reducer;
