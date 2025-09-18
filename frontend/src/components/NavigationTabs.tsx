// NavigationTabs.tsx
import React from "react";

interface NavigationTabsProps {
    activeTab: "new-sale" | "day-history";
    onTabChange: (tab: "new-sale" | "day-history") => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
    activeTab,
    onTabChange,
}) => {
    const commonClasses = "px-6 py-2 rounded-md transition-colors duration-200";
    const activeClasses = "bg-blue-600 text-white shadow-md";
    const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";

    return (
        <div className="flex space-x-2 mb-6">
            <button
                className={`${commonClasses} ${
                    activeTab === "new-sale" ? activeClasses : inactiveClasses
                }`}
                onClick={() => onTabChange("new-sale")}
            >
                New sale
            </button>
            <button
                className={`${commonClasses} ${
                    activeTab === "day-history"
                        ? activeClasses
                        : inactiveClasses
                }`}
                onClick={() => onTabChange("day-history")}
            >
                Day History
            </button>
        </div>
    );
};

export default NavigationTabs;
