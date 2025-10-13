import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "../interface/user.interface";

export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  const response = await axios.get("http://localhost:3000/users");

  return response.data;
});

export const addUser = createAsyncThunk(
  "user/createUser",
  async (userRequest: User) => {
    const response = await axios.post(
      "http://localhost:3000/users",
      userRequest
    );

    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "user/addFavoriteRecipeUserData",
  async (userRequest: User) => {
    const response = await axios.put(
      `http://localhost:3000/users/${userRequest.id}`,
      userRequest
    );

    return response.data;
  }
);
