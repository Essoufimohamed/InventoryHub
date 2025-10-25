import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout.js";
import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm.js";
import CachierLayout from "./layout/CachierLayout.js";

import { Toaster } from "react-hot-toast";
import NewSalePage from "./components/NewSalePage.js";
import DayHistoryPage from "./components/DayHistoryPage.js";

function App() {
    return (
        <>
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

            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
