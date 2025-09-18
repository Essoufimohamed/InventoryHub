import { Asidebar } from "../components/Asidebar";
import userImg from "../assets/icons/user.png";
import DashboardHome from "../pages/DashboardHome";
import { Link, Route, Routes } from "react-router-dom";
import DashboardProducts from "../pages/DashboardProducts";
import DashboardStock from "../pages/DashboardStock";
import DashboardCategory from "../pages/DashboardCategory";
import DashboardSuppliers from "../pages/DashboardSuppliers";
import DashboardStuff from "../pages/DashboardStaff";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import ProfilePage from "../pages/ProfilePage";

export default function layout() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <>
            <div className="flex ">
                <aside className="fixed w-13 md:w-[260px] top-0 left-0 h-screen overflow-hidden">
                    <Asidebar />
                </aside>
                <main className="ml-13 md:ml-[260px] flex-1 bg-gray-50 min-h-screen">
                    {/* <header className="flex justify-between py-3 px-4 bg-white shadow-md">
                        <div className="flex ml-auto gap-3">
                            <img
                                className="w-12 h-12 border border-[#ccc] rounded-full"
                                src={userImg}
                                alt=""
                            />
                            <div>
                                <strong>John doe</strong>
                                <p className="text-gray-500 ">admin</p>
                            </div>
                        </div>
                    </header> */}
                    <header className="flex justify-between py-3 px-4 bg-white shadow-md relative">
                        <div
                            className="flex ml-auto gap-3 items-center cursor-pointer"
                            onClick={() => setOpen(!open)}
                            ref={dropdownRef}
                        >
                            <img
                                className="w-12 h-12 border border-[#ccc] rounded-full"
                                src={userImg} // replace with {userImg}
                                alt="user avatar"
                            />
                            <div>
                                <strong className="block">John Doe</strong>
                                <p className="text-gray-500 text-sm flex items-center gap-1">
                                    Admin <ChevronDown size={16} />
                                </p>
                            </div>
                        </div>

                        {/* Dropdown with animation */}
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-4 top-16 bg-white shadow-lg rounded-xl w-52 py-2 px-3 z-50"
                                >
                                    <ul className="flex flex-col">
                                        <Link to={"/profil"}>
                                            <li className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                                                <User size={18} /> Profile{" "}
                                            </li>
                                        </Link>
                                        <li className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                                            <Settings size={18} /> Settings
                                        </li>
                                        <li className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer text-red-500">
                                            <LogOut size={18} /> Logout
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </header>
                    <div className="p-4 ">
                        {/* <DashboardHome /> */}
                        <Routes>
                            <Route path="/" element={<DashboardHome />} />
                            <Route
                                path="/products"
                                element={<DashboardProducts />}
                            />
                            <Route path="/stock" element={<DashboardStock />} />
                            <Route
                                path="/categories"
                                element={<DashboardCategory />}
                            />
                            <Route
                                path="/suppliers"
                                element={<DashboardSuppliers />}
                            />
                            <Route path="/staff" element={<DashboardStuff />} />
                            <Route path="/profil" element={<ProfilePage />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </>
    );
}
