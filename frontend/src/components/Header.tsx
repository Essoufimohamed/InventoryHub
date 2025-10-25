import React, { useEffect, useRef, useState } from "react";
import { User, LogOut, ChevronDown, Store, History } from "lucide-react"; // All Lucide icons
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import userImg from "../assets/icons/user.png";

const Header = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for the dropdown trigger area
    const dropdownMenuRef = useRef(null); // Ref for the dropdown menu itself
    const location = useLocation();
    const menuLinks = [
        {
            title: "New Sale",
            icon: <Store size={18} />, // Added size prop for consistency
            link: "/cashier/sale",
        },
        {
            title: "History", // Corrected typo: "Hitory" -> "History"
            icon: <History size={18} />, // Added size prop for consistency
            link: "/cashier/history",
        },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if click is outside both the dropdown trigger and the dropdown menu
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                dropdownMenuRef.current &&
                !dropdownMenuRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="py-3 px-4 bg-white shadow-md relative">
            <nav className="container flex justify-between items-center mx-auto">
                {/* Main Navigation Links */}
                <div className="flex items-center gap-4">
                    {menuLinks.map((item, index) => (
                        <Link
                            key={index} // Added key for list items
                            to={item.link}
                            className={`flex gap-2 items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                                location.pathname === item.link
                                    ? "bg-blue-100 text-blue-700 font-semibold" // Active link styles
                                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600" // Inactive link styles
                            }`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.title}</span>
                        </Link>
                    ))}
                </div>

                {/* User Dropdown Trigger */}
                <div
                    className="flex gap-3 items-center cursor-pointer relative" // Added relative for positioning dropdown
                    onClick={() => setOpen(!open)}
                    ref={dropdownRef} // Attach ref to the clickable area
                >
                    <img
                        className="w-12 h-12 border border-[#ccc] rounded-full object-cover" // Added object-cover for image
                        src={userImg}
                        alt="user avatar"
                    />
                    <div>
                        <strong className="block text-gray-800">
                            John Doe
                        </strong>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                            Admin{" "}
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${
                                    open ? "rotate-180" : "rotate-0"
                                }`}
                            />{" "}
                            {/* Rotate icon */}
                        </p>
                    </div>
                </div>
            </nav>

            {/* Dropdown Menu with animation */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={dropdownMenuRef} // Attach ref to the dropdown menu
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-4 top-full mt-2 bg-white shadow-lg rounded-xl w-52 py-2 px-3 z-50 border border-gray-100" // Adjusted top, added mt-2 and border
                    >
                        <ul className="flex flex-col">
                            <Link
                                to={"/profile"}
                                onClick={() => setOpen(false)}
                            >
                                {" "}
                                {/* Corrected /profil to /profile, close dropdown on click */}
                                <li className="px-3 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-150">
                                    <User size={18} /> Profile
                                </li>
                            </Link>

                            {/* Logout is typically a button or a div with an onClick handler */}
                            <li className="px-3 py-2 flex items-center gap-2 hover:bg-red-50 text-red-600 rounded-lg cursor-pointer transition-colors duration-150 mt-1">
                                {" "}
                                {/* Added mt-1 for spacing */}
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
