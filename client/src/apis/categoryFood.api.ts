import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategoryFood = createAsyncThunk(
  "categoryFood/getAllCategoryFood",
  async () => {
    const response = await axios.get("http://localhost:3000/foodCategory");
    return response.data;
  }
);
