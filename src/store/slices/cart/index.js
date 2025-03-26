import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: 0,
    reducers: {
        Add_To_Cart: (state) => {
            console.log({state})
            return state + 1;
        },
        Remove_From_Cart: (state) => {
            return state - 1;
        }
    }
})

export const { Add_To_Cart, Remove_From_Cart } = cartSlice.actions;
export default cartSlice.reducer;
