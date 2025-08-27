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
