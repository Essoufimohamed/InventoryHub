import StatCard from "../components/StatCard";
import SectionsTitle from "../components/SectionsTitle";

import productsIcon from "../assets/icons/in-stock.png";
import suppliersIcon from "../assets/icons/supplier.png";
import stockIcon from "../assets/icons/out-of-stock.png";
import DashboardCharts from "../components/dash-charts";
import { useEffect, useState } from "react";
import api from "../utils/api";

export default function DashboardHome() {
    const [dashStats, setDashStats] = useState(null);

    const getStats = async () => {
        const { data } = await api.get("/stats");
        setDashStats(data);
    };
    useEffect(() => {
        getStats();
    }, []);
    // setInterval(getStats, 60000);

    return (
        <>
            <div className="p-2">
                <SectionsTitle title={"Features Stats"} />
                {dashStats ? (
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                        <StatCard
                            icon={productsIcon}
                            title="Total Products"
                            statNumber={dashStats.totalProducts}
                        />
                        <StatCard
                            icon={stockIcon}
                            title="Low Stock"
                            statNumber={dashStats.lowStock}
                        />
                        <StatCard
                            icon={suppliersIcon}
                            title="Suppliers"
                            statNumber={dashStats.suppliers}
                        />
                    </section>
                ) : (
                    <p className="text-center text-gray-500 mt-4 p-3">
                        Loading stats...
                    </p>
                )}
            </div>
            <div className="p-2 mt-5">
                <SectionsTitle title={"Charts "} />
                {dashStats &&
                    dashStats.productsPerCategory &&
                    dashStats.stockDistribution && (
                        <div className="p-2 mt-5">
                            <DashboardCharts
                                productsPerCategory={
                                    dashStats.productsPerCategory
                                }
                                stockDistribution={dashStats.stockDistribution}
                            />
                        </div>
                    )}
            </div>
        </>
    );
}
