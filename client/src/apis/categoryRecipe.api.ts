import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategoryRecipe = createAsyncThunk(
  "categoryRecipe/getAllCategoryRecipe",
  async () => {
    const response = await axios.get("http://localhost:3000/recipeCategory");
    return response.data;
  }
);
