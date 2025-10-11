import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../slices/sidebarSlices";
import modalEditFood from "../slices/foods/modalEditFood";
import modalAddFood from "../slices/foods/modalAddFood";
import userSlice from "../slices/userSlice";
import userLoginSlice from "../slices/userLoginSlice";
import recipeSlice from "../slices/recipeSlice";
import foodSlice from "../slices/foodSlice";
import filterSlice from "../slices/filterSlice";
import categoryRecipeSlice from "../slices/categoryRecipeSlice";
import categoryFoodSlice from "../slices/categoryFoodSlice";
import addRecipeSlice from "../slices/addRecipeSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    addFood: modalAddFood,
    editFood: modalEditFood,
    user: userSlice,
    userLogin: userLoginSlice,
    recipe: recipeSlice,
    food: foodSlice,
    filter: filterSlice,
    categoryRecipe: categoryRecipeSlice,
    categoryFood: categoryFoodSlice,
    addRecipe: addRecipeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
