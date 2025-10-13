import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "../../apis/user.api";
import type { User } from "../../interface/user.interface";

const initialState: { user: User } = {
  user: {
    id: "",
    email: "",
    username: "",
    password: "",
    favorites: [],
  },
};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },

    logout(state) {
      state.user = {
        id: "",
        email: "",
        username: "",
        password: "",
        favorites: [],
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userLoginSlice.reducer;
export const { login, logout } = userLoginSlice.actions;
