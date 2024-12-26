import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Adds item to cart or increases quantity if it already exists
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      
      if (existingItem) {
        existingItem.quantity += 1;  // Increase the quantity if item exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Otherwise, add it with quantity 1
      }
    },
    
    // Removes item by id from cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    
    // Clears all items from the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
