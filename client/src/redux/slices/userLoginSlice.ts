import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
});

export default userLoginSlice.reducer;
export const { login, logout } = userLoginSlice.actions;
