// NewSalePage.tsx
import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductSearchBar from "./ProductSearchBar";
import ProductGrid from "./ProductGrid";
import ShoppingCart from "./ShoppingCart";

import { ProductProvider } from "../context/ProductContext";

const NewSalePage = () => {
    return (
        <ProductProvider>
            <div className="flex gap-3">
                <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-4">
                        <ProductCategoryFilter />
                        <ProductSearchBar />
                    </div>
                    <ProductGrid />
                </div>
                <ShoppingCart />
            </div>
        </ProductProvider>
    );
};

export default NewSalePage;
