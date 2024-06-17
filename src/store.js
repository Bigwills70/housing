import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Rdux/userSlice";
import cartSlice from "./Rdux/cartSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
