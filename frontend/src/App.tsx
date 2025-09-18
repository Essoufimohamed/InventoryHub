import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout.js";
import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm.js";
import CachierLayout from "./layout/CachierLayout.js";
function App() {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Layout />} />
                <Route path="/cashier" element={<CachierLayout />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </>
    );
}

export default App;
