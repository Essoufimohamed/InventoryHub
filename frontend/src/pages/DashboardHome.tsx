import StatCard from "../components/StatCard";
import SectionsTitle from "../components/SectionsTitle";

import productsIcon from "../assets/icons/in-stock.png";
import suppliersIcon from "../assets/icons/supplier.png";
import stockIcon from "../assets/icons/out-of-stock.png";
import DashboardCharts from "../components/dash-charts";

export default function DashboardHome() {
    return (
        <>
            <div className="p-2">
                <SectionsTitle title={"Features Stats"} />
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
                    <StatCard
                        icon={productsIcon}
                        title={"Total Products"}
                        statNumber={2034}
                    />
                    <StatCard
                        icon={stockIcon}
                        title={"Low Stock"}
                        statNumber={13}
                    />
                    <StatCard
                        icon={suppliersIcon}
                        title={"Suppliers"}
                        statNumber={24}
                    />
                </section>
            </div>
            <div className="p-2 mt-5">
                <SectionsTitle title={"Charts "} />
                <DashboardCharts />
            </div>
        </>
    );
}
