import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout.js";
import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm.js";
import CachierLayout from "./layout/CachierLayout.js";

import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Layout />} />
                <Route path="/cashier" element={<CachierLayout />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>

            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
