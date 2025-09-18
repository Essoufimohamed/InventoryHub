import { useState } from "react";
import Header from "../components/Header";
import NavigationTabs from "../components/NavigationTabs";
import NewSalePage from "../components/NewSalePage";
import DayHistoryPage from "../components/DayHistoryPage";

export default function CachierLayout() {
    const [activeTab, setActiveTab] = useState<"new-sale" | "day-history">(
        "new-sale"
    );

    return (
        <>
            <Header title={"John"} />
            <section className="bg-gray-50">
                <div className="container mx-auto p-3">
                    <NavigationTabs
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                    {activeTab === "new-sale" ? (
                        <NewSalePage />
                    ) : (
                        <DayHistoryPage />
                    )}
                </div>
            </section>
        </>
    );
}
