import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRecipe = createAsyncThunk("user/getAllRecipe", async () => {
  const response = await axios.get("http://localhost:3000/recipe");
  return response.data;
});
