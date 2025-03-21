import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import appStore  from "./redux/store"
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={appStore}>
        <RouterProvider router={router} />

        </Provider>
    </React.StrictMode>
);
