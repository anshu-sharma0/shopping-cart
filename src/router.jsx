import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import ProductListing from "./components/Products/ProductListing";
import ProductDetails from "./components/Products/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListing />
    },
    {
        path: "/product/:productId",
        element: <ProductDetails />
    },
    {
        path: "/cart",
        element: <Cart />
    }
])