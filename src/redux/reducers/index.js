import { combineReducers } from "@reduxjs/toolkit";

import { productReducer, selectedProductReducer } from "./product-reducer";

const rootReducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default rootReducer;
