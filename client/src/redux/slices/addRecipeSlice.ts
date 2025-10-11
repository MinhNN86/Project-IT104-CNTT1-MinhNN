import { createSlice } from "@reduxjs/toolkit";
import type { AddRecipe } from "../../interface/addRecipe.interface";

type StateType = {
  addRecipe: AddRecipe;
};

const initialState: StateType = {
  addRecipe: {
    coverSrc: "",
    name: "",
    description: "",
    author: "",
    totalTime: "",
    preparationTime: "",
    finalWeight: 0,
    portions: "",
    likes: 0,
    ingredients: [],
    cookingMethods: "",
    category: [],
    isLoading: false,
  },
};

const addRecipeSlice = createSlice({
  name: "addRecipe",
  initialState,
  reducers: {
    updateAddRecipeCoverSrc(state, action) {
      state.addRecipe.coverSrc = action.payload;
    },
    updateAddRecipeName(state, action) {
      state.addRecipe.name = action.payload;
    },
    updateAddRecipeDescription(state, action) {
      state.addRecipe.description = action.payload;
    },
    updateAddRecipeAuthor(state, action) {
      state.addRecipe.author = action.payload;
    },
    updateAddRecipeTotalTime(state, action) {
      state.addRecipe.totalTime = action.payload;
    },
    updateAddRecipePreparationTime(state, action) {
      state.addRecipe.preparationTime = action.payload;
    },
    updateAddRecipeFinalWeight(state, action) {
      state.addRecipe.finalWeight = action.payload;
    },
    updateAddRecipePortions(state, action) {
      state.addRecipe.portions = action.payload;
    },
    updateAddRecipeIngredients(state, action) {
      state.addRecipe.ingredients = action.payload;
    },
    updateAddRecipeCookingMethods(state, action) {
      state.addRecipe.cookingMethods = action.payload;
    },
    updateAddRecipeCategory(state, action) {
      state.addRecipe.category = action.payload;
    },
    updateAddRecipeIsLoading(state, action) {
      state.addRecipe.isLoading = action.payload;
    },
    resetAddRecipe(state) {
      state.addRecipe = initialState.addRecipe;
    },
  },
});

export default addRecipeSlice.reducer;
export const {
  updateAddRecipeCoverSrc,
  updateAddRecipeName,
  updateAddRecipeDescription,
  updateAddRecipeAuthor,
  updateAddRecipeTotalTime,
  updateAddRecipePreparationTime,
  updateAddRecipeFinalWeight,
  updateAddRecipePortions,
  updateAddRecipeIngredients,
  updateAddRecipeCookingMethods,
  updateAddRecipeCategory,
  resetAddRecipe,
  updateAddRecipeIsLoading,
} = addRecipeSlice.actions;
