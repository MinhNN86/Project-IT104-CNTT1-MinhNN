import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Recipe } from "../interface/recipe.interface";

export const getAllRecipe = createAsyncThunk(
  "recipe/getAllRecipe",
  async () => {
    const response = await axios.get("http://localhost:3000/recipe");
    return response.data;
  }
);

export const addRecipe = createAsyncThunk(
  "recipe/addRecipe",
  async (recipeRequest: Recipe) => {
    const response = await axios.post(
      "http://localhost:3000/recipe",
      recipeRequest
    );
    return response.data;
  }
);

export const updateRecipe = createAsyncThunk(
  "recipe/updateRecipe",
  async (recipeRequest: Recipe) => {
    const response = await axios.put(
      `http://localhost:3000/recipe/${recipeRequest.id}`,
      recipeRequest
    );
    return response.data;
  }
);
