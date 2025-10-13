import { createSlice } from "@reduxjs/toolkit";
import type { Recipe } from "../../interface/recipe.interface";
import { addRecipe, getAllRecipe, updateRecipe } from "../../apis/recipe.api";

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
    builder
      .addCase(getAllRecipe.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (recipe) => recipe.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      });
  },
});

export default recipeSlice.reducer;
