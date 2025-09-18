// ProductSearchBar.tsx
import React from "react";

interface ProductSearchBarProps {
    onSearch: (query: string) => void;
    value: string;
}

const ProductSearchBar: React.FC<ProductSearchBarProps> = ({
    onSearch,
    value,
}) => {
    return (
        <div className="mb-6 w-full max-w-xs">
            <input
                type="text"
                placeholder="Search product / sku"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default ProductSearchBar;
