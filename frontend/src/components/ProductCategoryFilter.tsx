// ProductCategoryFilter.tsx
import React from "react";

interface ProductCategoryFilterProps {
    categories: string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
}

const ProductCategoryFilter: React.FC<ProductCategoryFilterProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
}) => {
    const commonClasses =
        "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200";
    const activeClasses = "bg-blue-500 text-white";
    const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";

    return (
        <div className="flex space-x-2 mb-6">
            <button
                className={`${commonClasses} ${
                    selectedCategory === null ? activeClasses : inactiveClasses
                }`}
                onClick={() => onSelectCategory(null)}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    className={`${commonClasses} ${
                        selectedCategory === category
                            ? activeClasses
                            : inactiveClasses
                    }`}
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ProductCategoryFilter;
