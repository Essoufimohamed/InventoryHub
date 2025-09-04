import { UserRound, Lock } from "lucide-react";
import logo from "../assets/logo (2).jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    function handlSubmitForm(e) {
        e.preventDefault();
        console.log("submit form", loginData);
        navigate("/");
    }
    return (
        <>
            <section className="bg-[#65b2df] min-h-screen flex justify-center items-center p-4">
                <div className="bg-white w-full max-w-lg py-8 px-6 rounded-2xl shadow-lg">
                    <img
                        src={logo}
                        alt="Welcome"
                        className="mx-auto mb-6 w-24 h-24 object-cover rounded-full"
                    />
                    <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                        Welcome Back
                    </h2>
                    <form
                        onSubmit={(e) => {
                            handlSubmitForm(e);
                        }}
                    >
                        <div className="relative mb-5">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                                <UserRound width={24} color="#555" />
                            </div>
                            <input
                                value={loginData.email}
                                onChange={(e) => {
                                    setLoginData({
                                        ...loginData,
                                        email: e.target.value,
                                    });
                                }}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your email"
                                className="focus:outline-none focus:ring-2 focus:ring-[#A5C7FF] border border-gray-300 h-14 pl-16 pr-4 w-full rounded-full text-gray-700 placeholder-gray-500 transition-all duration-200 ease-in-out"
                                aria-label="Email address"
                            />
                        </div>
                        <div className="relative mb-5">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                                <Lock width={24} color="#555" />
                            </div>
                            <input
                                value={loginData?.password}
                                onChange={(e) => {
                                    setLoginData({
                                        ...loginData,
                                        password: e.target.value,
                                    });
                                }}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Your password"
                                className="focus:outline-none focus:ring-2 focus:ring-[#A5C7FF] border border-gray-300 h-14 pl-16 pr-4 w-full rounded-full text-gray-700 placeholder-gray-500 transition-all duration-200 ease-in-out"
                                aria-label="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#A5C7FF] w-full py-3 text-xl font-bold text-white rounded-full mt-4 mb-6 hover:bg-[#8bb4ed] transition-colors duration-200 ease-in-out shadow-md"
                        >
                            Login
                        </button>
                        <p className="text-center text-gray-600 text-sm">
                            Don't have an account yet?{" "}
                            <Link
                                to="/register"
                                className="text-[#65b2df] hover:text-[#4a90d9] font-semibold transition-colors duration-200 ease-in-out"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}
