import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemLists: [],
    totalQuantity: 0,
  },

  reducers: {
    addToCart(state, action) {
      const existingItem = state.itemLists.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += action.payload.price;
        toast.warn("Quantity increased");
      } else {
        state.itemLists.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
        });
        toast.success(`${action.payload.name} has been added to cart`);
        state.totalQuantity++;
      }
    },

    removeFrmCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.itemLists.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemLists = state.itemLists.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    deleteProductromCart(state, action) {
      state.itemLists = state.itemLists.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  deleteProductromCart,
  removeFrmCart,
} = cartSlice.actions;

export default cartSlice;
