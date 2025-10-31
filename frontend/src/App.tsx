import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import Layout from "./layout/Layout.js";
// import LoginForm from "./components/LoginForm.js";
// import RegisterForm from "./components/RegisterForm.js";
// import CachierLayout from "./layout/CachierLayout.js";
// import NewSalePage from "./components/NewSalePage.js";
// import DayHistoryPage from "./components/DayHistoryPage.js";

import { Toaster } from "react-hot-toast";

const Layout = lazy(() => import("./layout/Layout.js"));
const CachierLayout = lazy(() => import("./layout/CachierLayout.js"));
const LoginForm = lazy(() => import("./components/LoginForm.js"));
const RegisterForm = lazy(() => import("./components/RegisterForm.js"));
const NewSalePage = lazy(() => import("./components/NewSalePage.js"));
const DayHistoryPage = lazy(() => import("./components/DayHistoryPage.js"));

function App() {
    function LoaderScreen() {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-gray-100">
                <div className="relative">
                    <div className="h-16 w-16 rounded-full border-4 border-blue-300 border-t-blue-600 animate-spin shadow-lg" />

                    <div className="absolute inset-0 rounded-full blur-lg bg-blue-400/30 animate-pulse" />
                </div>

                <p className="mt-6 text-gray-700 font-medium text-lg tracking-wide">
                    Loading ...
                </p>
            </div>
        );
    }

    return (
        <>
            {/* <Routes>
                <Route path="/*" element={<Layout />} />
                <Route path="/cashier" element={<CachierLayout />}>
                    <Route path="/cashier/sale" element={<NewSalePage />} />
                    <Route
                        path="/cashier/history"
                        element={<DayHistoryPage />}
                    />
                </Route>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes> */}

            <Suspense fallback={LoaderScreen()}>
                <Routes>
                    <Route path="/*" element={<Layout />} />

                    <Route path="/cashier" element={<CachierLayout />}>
                        <Route path="/cashier/sale" element={<NewSalePage />} />
                        <Route
                            path="/cashier/history"
                            element={<DayHistoryPage />}
                        />
                    </Route>

                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </Suspense>

            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
