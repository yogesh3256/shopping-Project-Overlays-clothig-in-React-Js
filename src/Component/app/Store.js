import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/slices/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    
    
  },
});
