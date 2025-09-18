import React, { useEffect, useRef, useState } from "react";
import { User, LogOut, ChevronDown } from "lucide-react"; // Assuming Lucide icons
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import userImg from "../assets/icons/user.png";
const Header = ({ title }) => {
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
        <header className=" flex justify-between items-center py-3 px-4 bg-white shadow-md relative">
            <h2 className="text-2xl">
                Hello <b>{title}</b>
            </h2>
            <div
                className="flex  gap-3 items-center cursor-pointer"
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

                            <li className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer text-red-500">
                                <LogOut size={18} /> Logout
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
