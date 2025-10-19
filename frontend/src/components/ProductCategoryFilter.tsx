// ProductCategoryFilter.tsx
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ProductCategoryFilter() {
    const { categories, selectedCategoryId, selectCategory } =
        useContext(ProductContext);

    const commonClasses =
        "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200";
    const activeClasses = "bg-blue-500 text-white";
    const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";

    return (
        <div className="flex space-x-2 mb-6">
            <button
                className={`${commonClasses} ${
                    selectedCategoryId === null
                        ? activeClasses
                        : inactiveClasses
                }`}
                onClick={() => selectCategory(null)}
            >
                All
            </button>
            {categories?.map((category) => (
                <button
                    key={category._id}
                    className={`${commonClasses} ${
                        selectedCategoryId === category._id
                            ? activeClasses
                            : inactiveClasses
                    }`}
                    onClick={() => selectCategory(category._id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}
