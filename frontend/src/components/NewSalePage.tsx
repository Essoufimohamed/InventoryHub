// NewSalePage.tsx
import React, { useContext, useState } from "react";
import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductSearchBar from "./ProductSearchBar";
import ProductGrid from "./ProductGrid";
import ShoppingCart from "./ShoppingCart";

import img from "../assets/watch.jpg";
import { ProductContext, ProductProvider } from "../context/ProductContext";

// Define your Product and CartItem types
interface Product {
    id: string;
    image: string;
    title: string;
    price: number;
    stock: number;
}

interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

const DUMMY_PRODUCTS: Product[] = [
    {
        id: "1",
        image: img,
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 100,
    },
    {
        id: "2",
        image: img,
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 10,
    },
    {
        id: "3",
        image: img,
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 100,
    },
    {
        id: "4",
        image: img,
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 10,
    },
    {
        id: "5",
        image: img,
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 100,
    },
    {
        id: "6",
        image: img,
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 10,
    },
    {
        id: "7",
        image: img,
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 100,
    },
];

// const CATEGORIES = ["Beauty", "Gadget", "Electronics"];

const NewSalePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <ProductProvider>
            <div className="flex gap-3">
                <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-4">
                        <ProductCategoryFilter />
                        <ProductSearchBar
                            value={searchQuery}
                            onSearch={setSearchQuery}
                        />
                    </div>
                    <ProductGrid
                    // products={filteredProducts}
                    // onAddToCart={handleAddToCart}
                    />
                </div>
                <ShoppingCart
                // cartItems={cart}
                // totalAmount={calculateTotal()}
                // onCheckout={handleCheckout}
                />
            </div>
        </ProductProvider>
    );
};

export default NewSalePage;
