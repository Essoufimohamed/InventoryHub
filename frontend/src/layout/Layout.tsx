import { Asidebar } from "../components/Asidebar";
import userImg from "../assets/icons/user.png";
import DashboardHome from "../pages/DashboardHome";
import { Route, Routes } from "react-router-dom";
import DashboardProducts from "../pages/DashboardProducts";
import DashboardStock from "../pages/DashboardStock";

export default function layout() {
    return (
        <>
            <div className="flex ">
                <aside className="fixed top-0 left-0 h-screen overflow-hidden">
                    <Asidebar />
                </aside>
                <main className="ml-[260px] flex-1 bg-gray-50 min-h-screen">
                    <header className="flex justify-between py-3 px-4 shadow-[0px_0px_6px_-1px_rgba(0,_0,_0,_0.2)]">
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
                        </Routes>
                    </div>
                </main>
            </div>
        </>
    );
}
