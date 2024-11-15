import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import styles from "./App.module.css";

function App() {
    return (
        <div>
            <Header />
            <div className={styles.mainContent}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
}

export default App;
