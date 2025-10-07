import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllFood = createAsyncThunk("food/getAllFood", async () => {
  const response = await axios.get("http://localhost:3000/food");
  return response.data;
});
