import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart";
import Form from "./components/Form";
import ProductListing from "./components/Products/ProductListing";
import ProductDetails from "./components/Products/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/productListing",
        element: <ProductListing />
    },
    {
        path: "/product/:productId",
        element: <ProductDetails />
    },
    {
        path: "/cart",
        element: <Cart/>
    }
])