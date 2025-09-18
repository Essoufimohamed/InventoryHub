// ProductGrid.tsx
import React from "react";
import ProductCard from "./ProductCard"; // Assuming ProductCard is in the same directory

interface Product {
    id: string;
    image: string;
    title: string;
    price: number;
    stock: number;
}

interface ProductGridProps {
    products: Product[];
    onAddToCart: (productId: string, quantity: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow pr-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
