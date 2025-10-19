// // ProductGrid.tsx
// import React from "react";
// import ProductCard from "./ProductCard"; // Assuming ProductCard is in the same directory

// interface Product {
//     id: string;
//     image: string;
//     title: string;
//     price: number;
//     stock: number;
// }

// interface ProductGridProps {
//     products: Product[];
//     onAddToCart: (productId: string, quantity: number) => void;
// }

// const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 flex-grow pr-4">
//             {products.map((product) => (
//                 <ProductCard
//                     key={product.id}
//                     product={product}
//                     onAddToCart={onAddToCart}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ProductGrid;

// ProductList.jsx
import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";

export default function ProductList() {
    // const { products } = useContext(ProductContext);
    const { filtered, loading } = useContext(ProductContext);
    if (loading) return <div>Loading...</div>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.length === 0 ? (
                <div>No products found</div>
            ) : (
                filtered.map((p) => <ProductCard key={p._id} product={p} />)
            )}
        </div>
    );
}
