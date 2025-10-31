import dashboard from "../assets/icons/dashboard.png";
import product from "../assets/icons/product.png";
import stock from "../assets/icons/in-stock.png";
import category from "../assets/icons/category.png";
import suppliers from "../assets/icons/supplier.png";
import users from "../assets/icons/user (1).png";

import { Link, useLocation } from "react-router-dom";

export const Asidebar = () => {
    const location = useLocation();

    const menuNavigations = [
        {
            title: "Dashboard",
            icon: dashboard,
            link: "/",
        },
        {
            title: "Products",
            icon: product,
            link: "/products",
        },
        {
            title: "Stock Logs",
            icon: stock,
            link: "/stock",
        },
        {
            title: "Categories",
            icon: category,
            link: "/categories",
        },
        {
            title: "Suppliers",
            icon: suppliers,
            link: "/suppliers",
        },
        {
            title: "Staff",
            icon: users,
            link: "/staff",
        },
    ];

    return (
        <>
            <div className="bg-[#A5C7FF] w-65 h-screen ">
                <div className="logo mb-8 p-2 font-bold ">
                    <h1 className="text-3xl italic text-center p-3">
                        InventoryHub
                    </h1>
                </div>
                <div className="flex flex-col gap-2">
                    {menuNavigations.map((item, index) => {
                        return (
                            <>
                                <Link
                                    className={` flex w-[90%] items-center gap-3 px-5 py-2 hover:bg-white rounded-r-[20px] ${
                                        location.pathname === item.link
                                            ? "bg-white"
                                            : ""
                                    } `}
                                    to={item.link}
                                    key={index}
                                >
                                    <img
                                        className="w-6 mr-2"
                                        src={item.icon}
                                        alt={item.title}
                                    />
                                    <span className="text-lg ">
                                        {item.title}
                                    </span>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// // Import icons from lucide-react
// import {
//     LayoutDashboard,
//     Package,
//     History,
//     Folders,
//     Truck,
//     Users,
//     Store, // A new icon for the brand/logo
// } from "lucide-react";

// export const Asidebar = () => {
//     const location = useLocation();

//     // Use Lucide icons directly in the menuNavigations array
//     const menuNavigations = [
//         {
//             title: "Dashboard",
//             icon: LayoutDashboard, // Lucide icon component
//             link: "/",
//         },
//         {
//             title: "Products",
//             icon: Package, // Lucide icon component
//             link: "/products",
//         },
//         {
//             title: "Stock Logs",
//             icon: History, // Lucide icon component
//             link: "/stock",
//         },
//         {
//             title: "Categories",
//             icon: Folders, // Lucide icon component
//             link: "/categories",
//         },
//         {
//             title: "Suppliers",
//             icon: Truck, // Lucide icon component
//             link: "/suppliers",
//         },
//         {
//             title: "Staff",
//             icon: Users, // Lucide icon component
//             link: "/staff",
//         },
//     ];

//     return (
//         <div className="bg-gradient-to-br from-blue-700 to-blue-900 w-64 min-h-screen text-white flex flex-col shadow-xl">
//             {/* Logo/Brand Section */}
//             <div className="p-6 pb-4 flex items-center justify-center border-b border-blue-600/50">
//                 <Store className="w-8 h-8 text-blue-300 mr-2" />
//                 <h1 className="text-3xl font-extrabold tracking-tight">
//                     InventoryHub
//                 </h1>
//             </div>

//             {/* Navigation Links */}
//             <nav className="flex-1 px-4 py-6 space-y-2">
//                 {menuNavigations.map((item) => {
//                     // Determine if the link is active
//                     const isActive = location.pathname === item.link;

//                     return (
//                         <Link
//                             key={item.title} // Use title as key, or item.link
//                             to={item.link}
//                             className={`
//                                 flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium
//                                 transition-all duration-200 ease-in-out
//                                 ${
//                                     isActive
//                                         ? "bg-blue-500 text-white shadow-md" // Active state styling
//                                         : "text-blue-200 hover:bg-blue-700 hover:text-white" // Inactive state styling
//                                 }
//                             `}
//                         >
//                             <item.icon className="w-6 h-6" />{" "}
//                             {/* Render Lucide icon component */}
//                             <span>{item.title}</span>
//                         </Link>
//                     );
//                 })}
//             </nav>

//             {/* Optional Footer/Version Info */}
//             <div className="p-4 text-center text-blue-300 text-sm border-t border-blue-600/50">
//                 &copy; {new Date().getFullYear()} InventoryHub
//             </div>
//         </div>
//     );
// };
