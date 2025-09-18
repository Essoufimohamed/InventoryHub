// NewSalePage.tsx
import React, { useState } from "react";
import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductSearchBar from "./ProductSearchBar";
import ProductGrid from "./ProductGrid";
import ShoppingCart from "./ShoppingCart";

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
        image: "https://via.placeholder.com/64",
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 100,
    },
    {
        id: "2",
        image: "https://via.placeholder.com/64",
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 10,
    },
    {
        id: "3",
        image: "https://via.placeholder.com/64",
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 100,
    },
    {
        id: "4",
        image: "https://via.placeholder.com/64",
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 10,
    },
    {
        id: "5",
        image: "https://via.placeholder.com/64",
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 100,
    },
    {
        id: "6",
        image: "https://via.placeholder.com/64",
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 10,
    },
    {
        id: "7",
        image: "https://via.placeholder.com/64",
        title: "title loremm jdjdvhkdjk",
        price: 250,
        stock: 100,
    },
];

const CATEGORIES = ["Beauty", "Gadget", "Electronics"];

const NewSalePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setCart] = useState<CartItem[]>([]);

    const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
        const matchesCategory =
            selectedCategory === null ||
            /* Logic to check product category */ true; // Placeholder
        const matchesSearch =
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.id.includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    const handleAddToCart = (productId: string, quantity: number) => {
        const productToAdd = DUMMY_PRODUCTS.find((p) => p.id === productId);
        if (productToAdd) {
            setCart((prevCart) => {
                const existingItem = prevCart.find(
                    (item) => item.id === productId
                );
                if (existingItem) {
                    return prevCart.map((item) =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    );
                } else {
                    return [
                        ...prevCart,
                        {
                            id: productToAdd.id,
                            title: productToAdd.title,
                            price: productToAdd.price,
                            quantity,
                        },
                    ];
                }
            });
        }
    };

    const calculateTotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        alert(`Processing order for ${calculateTotal().toFixed(2)} DH`);
        // Here you would typically send the cart data to your backend
        setCart([]); // Clear cart after checkout
    };

    return (
        <div className="flex">
            <div className="flex-grow">
                <div className="flex items-center space-x-4 mb-4">
                    <ProductCategoryFilter
                        categories={CATEGORIES}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                    <ProductSearchBar
                        value={searchQuery}
                        onSearch={setSearchQuery}
                    />
                </div>
                <ProductGrid
                    products={filteredProducts}
                    onAddToCart={handleAddToCart}
                />
            </div>
            <ShoppingCart
                cartItems={cart}
                totalAmount={calculateTotal()}
                onCheckout={handleCheckout}
            />
        </div>
    );
};

export default NewSalePage;
