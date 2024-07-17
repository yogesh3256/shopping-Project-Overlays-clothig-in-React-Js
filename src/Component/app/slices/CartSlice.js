import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity || 1,
        };
        state.push(newItem);
      }
    },
    increaseQuantity: (state, action) => {
      const itemToIncrease = state.find((item) => item.id === action.payload);
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemToDecrease = state.find((item) => item.id === action.payload);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      } else if (itemToDecrease && itemToDecrease.quantity === 1) {
        state = state.filter((item) => item.id !== action.payload);
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// Selector function to calculate the total price of items in the cart
export const selectTotalPrice = (state) =>
  state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
