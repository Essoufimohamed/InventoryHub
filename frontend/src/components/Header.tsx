import React from "react";
import { Search, Bell, Settings, UserCircle } from "lucide-react"; // Assuming Lucide icons

const Header = ({ title }) => {
    return (
        <div className="bg-white p-6 rounded-tr-xl rounded-br-xl shadow-md flex items-center justify-between sticky top-0 z-10">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <div className="flex items-center space-x-6">
                <UserCircle
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    size={24}
                />
                <Search
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    size={24}
                />
                <Bell
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    size={24}
                />
                <Settings
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    size={24}
                />
            </div>
        </div>
    );
};

export default Header;
