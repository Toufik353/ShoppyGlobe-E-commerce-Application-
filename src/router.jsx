import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Lazy load components
const Home = React.lazy(() => import("./components/Home/Home"));
const ProductList = React.lazy(() => import("./components/ProductList/ProductList"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails/ProductDetails"));
const Cart = React.lazy(() => import("./components/Cart/Cart"));
const NotFound = React.lazy(()=>import("./components/NotFound/NotFound"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { 
                path: "/", 
                element: (
                    <Suspense fallback={<div>Loading Home...</div>}>
                        <Home />
                    </Suspense>
                )
            },
            { 
                path: "productList", 
                element: (
                    <Suspense fallback={<div>Loading Product List...</div>}>
                        <ProductList />
                    </Suspense>
                )
            },
            {
                path: "productList/:productId",
                element: (
                    <Suspense fallback={<div>Loading Product Details...</div>}>
                        <ProductDetails />
                    </Suspense>
                )
            },
            {
                path: "cart",
                element: (
                    <Suspense fallback={<div>Loading Cart...</div>}>
                        <Cart />
                    </Suspense>
                )
            }, {
                path: "*",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                      <NotFound /> 
                    </Suspense>
                )
            }
            
        ],
    },
]);

export default router;
