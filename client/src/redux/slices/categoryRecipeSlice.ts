import { createSlice } from "@reduxjs/toolkit";
import type { RecipeCategory } from "../../interface/recipeCategory.interface";
import { getAllCategoryRecipe } from "../../apis/categoryRecipe.api";

type StateType = {
  status: "idle" | "pending" | "success" | "failed";
  data: RecipeCategory[];
  error: undefined | string;
};

const initialState: StateType = {
  status: "idle",
  data: [],
  error: undefined,
};

const categoryRecipeSlice = createSlice({
  name: "categoryRecipe",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllCategoryRecipe.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export default categoryRecipeSlice.reducer;
