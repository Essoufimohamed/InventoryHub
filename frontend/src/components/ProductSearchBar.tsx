// ProductSearchBar.tsx
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
export default function ProductSearchBar() {
    const { setSearchQuery, searchQuery } = useContext(ProductContext);
    const [local, setLocal] = useState(searchQuery || "");

    useEffect(() => {
        const t = setTimeout(() => {
            setSearchQuery(local);
        }, 300);
        return () => clearTimeout(t);
    }, [local, setSearchQuery]);

    return (
        <div className="mb-6 w-full max-w-xs">
            <input
                type="text"
                placeholder="Search product / sku"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
            />
        </div>
    );
}
