import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../interface/user.interface";
import { addUser, getAllUser, updateUser } from "../../apis/user.api";

type UserInitial = {
  status: "idle" | "pending" | "success" | "failed";
  data: User[];
  error: undefined | string;
};

const initialState: UserInitial = {
  status: "idle",
  data: [],
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default userSlice.reducer;
