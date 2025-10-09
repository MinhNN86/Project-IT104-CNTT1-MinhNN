import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Food } from "../interface/food.interface";

export const getAllFood = createAsyncThunk("food/getAllFood", async () => {
  const response = await axios.get("http://localhost:3000/food");
  return response.data;
});

export const addFood = createAsyncThunk(
  "food/addFood",
  async (foodRequest: Food) => {
    const response = await axios.post(
      "http://localhost:3000/food",
      foodRequest
    );

    return response.data;
  }
);

export const updateFood = createAsyncThunk(
  "food/updateFood",
  async (foodRequest: Food) => {
    const response = await axios.put(
      `http://localhost:3000/food/${foodRequest.id}`,
      foodRequest
    );

    return response.data;
  }
);
