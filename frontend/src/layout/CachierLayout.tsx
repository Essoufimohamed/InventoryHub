import Header from "../components/Header";

import { Outlet } from "react-router-dom";

export default function CachierLayout() {
    return (
        <>
            <Header />
            <section className="bg-gray-50">
                <div className="container mx-auto p-3">
                    <Outlet />
                </div>
            </section>
        </>
    );
}
