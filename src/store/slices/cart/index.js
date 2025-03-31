import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Add_To_Cart: (state, action) => {
      const product = { ...action.payload, isFavorited: false };
      const productExists = state.some(item => item.id === product.id);
      if (!productExists) {
        state.push(product);
      } else {
        console.log("Product already in cart");
      }
    },
    Remove_From_Cart: (state, action) => {
      const productId = action.payload.id;
      return state.filter(product => product.id !== productId);
    },
    Toggle_Favourite: (state, action) => {
      const productId = action.payload.id;
      const productIndex = state.findIndex(item => item.id === productId);
      
      if (productIndex !== -1) {
        // Product exists in cart, toggle its favorite status
        state[productIndex].isFavorited = !state[productIndex].isFavorited;
      } else {
        // Product not in cart, add it with favorited status
        state.push({ ...action.payload, isFavorited: true });
      }
    }
  }
});

export const { Add_To_Cart, Remove_From_Cart, Toggle_Favourite } = cartSlice.actions;
export default cartSlice.reducer;