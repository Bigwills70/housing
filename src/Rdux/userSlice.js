import { createSlice } from "@reduxjs/toolkit";
import { users } from "../Data";
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: users,
  },
  reducers: {
    addEmployee(state, action) {
      state.users.push(action.payload);
    },
    deleteEmployee(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addEmployee, deleteEmployee } = userSlice.actions;

export default userSlice;
