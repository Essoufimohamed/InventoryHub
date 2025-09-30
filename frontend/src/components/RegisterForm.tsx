import { UserRound, Lock, Mail } from "lucide-react";
import logo from "../assets/logo (2).jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

export default function RegisterForm() {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handlSubmitForm(e) {
        e.preventDefault();

        setLoading(true);

        if (registerData.password !== registerData.confirmPassword) {
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }
        api.post("/auth/register", {
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
        })
            .then((res) => {
                toast.success("Account created successfully!");

                navigate("/login");
            })
            .catch((err) => {
                toast.error(
                    err.response?.data?.message || "Registration failed"
                );
                setLoading(false);
            });
    }
    return (
        <>
            <section className="bg-[#65b2df] min-h-screen flex justify-center items-center p-4 ">
                <div className=" bg-white w-full max-w-lg py-8 px-6 rounded-2xl shadow-lg ">
                    <img
                        src={logo}
                        alt="Welcome"
                        className="mx-auto mb-5 w-24 h-24 object-cover rounded-full"
                    />
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                        Create an Account
                    </h2>
                    <form
                        onSubmit={(e) => {
                            handlSubmitForm(e);
                        }}
                    >
                        {/* Name Field */}
                        <div className="relative mb-4">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                                <UserRound width={24} color="#555" />{" "}
                                {/* Or User, UserRoundPlus */}
                            </div>
                            <input
                                value={registerData.name}
                                onChange={(e) => {
                                    setRegisterData({
                                        ...registerData,
                                        name: e.target.value,
                                    });
                                }}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                className="focus:outline-none focus:ring-2 focus:ring-[#A5C7FF] border border-gray-300 h-14 pl-16 pr-4 w-full rounded-full text-gray-700 placeholder-gray-500 transition-all duration-200 ease-in-out"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="relative mb-4">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                                <Mail width={24} color="#555" />
                            </div>
                            <input
                                value={registerData.email}
                                onChange={(e) => {
                                    setRegisterData({
                                        ...registerData,
                                        email: e.target.value,
                                    });
                                }}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your email"
                                className="focus:outline-none focus:ring-2 focus:ring-[#A5C7FF] border border-gray-300 h-14 pl-16 pr-4 w-full rounded-full text-gray-700 placeholder-gray-500 transition-all duration-200 ease-in-out"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative mb-4">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                                <Lock width={24} color="#555" />
                            </div>
                            <input
                                value={registerData.password}
                                onChange={(e) => {
                                    setRegisterData({
                                        ...registerData,
                                        password: e.target.value,
                                    });
                                }}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Create password"
                                className="focus:outline-none focus:ring-2 focus:ring-[#A5C7FF] border border-gray-300 h-14 pl-16 pr-4 w-full rounded-full text-gray-700 placeholder-gray-500 transition-all duration-200 ease-in-out"
                                required
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div className="relative mb-4">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                                <Lock width={24} color="#555" />{" "}
                                {/* Reusing Lock icon for consistency */}
                            </div>
                            <input
                                value={registerData.confirmPassword}
                                onChange={(e) => {
                                    setRegisterData({
                                        ...registerData,
                                        confirmPassword: e.target.value,
                                    });
                                }}
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                className="focus:outline-none focus:ring-2 focus:ring-[#A5C7FF] border border-gray-300 h-14 pl-16 pr-4 w-full rounded-full text-gray-700 placeholder-gray-500 transition-all duration-200 ease-in-out"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#A5C7FF] w-full py-3 text-xl font-bold text-white rounded-full mt-4 mb-6 hover:bg-[#8bb4ed] transition-colors duration-200 ease-in-out shadow-md"
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                        <p className="text-center text-gray-600 text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-[#65b2df] hover:text-[#4a90d9] font-semibold transition-colors duration-200 ease-in-out"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}
