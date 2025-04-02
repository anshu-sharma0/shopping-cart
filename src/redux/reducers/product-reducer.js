import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
};

const cartState = {
    cart: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, product: payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { ...state, product: {} };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const cartReducer = (state = cartState, { type, payload }) => {
    console.log({ payload, type, state });
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, cart: [...state.cart, payload] };
        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item?.id !== payload?.id) };
        case ActionTypes.CLEAR_CART:
            return { ...state, cart: [] };
        default:
            return state;
    }
};
