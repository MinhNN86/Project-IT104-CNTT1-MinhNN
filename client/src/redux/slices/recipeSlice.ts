import { createSlice } from "@reduxjs/toolkit";
import type { Recipe } from "../../interface/recipe.interface";
import { getAllRecipe } from "../../apis/recipe.api";

type RecipeInitial = {
  status: "idle" | "pending" | "success" | "failed";
  data: Recipe[];
  error: undefined | string;
};

const initialState: RecipeInitial = {
  status: "idle",
  data: [],
  error: undefined,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllRecipe.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export default recipeSlice.reducer;
