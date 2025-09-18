// ProductCard.tsx
import React from "react";

interface Product {
    id: string;
    image: string; // URL or base64
    title: string;
    price: number; // Assuming DH currency is handled at display level
    stock: number;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (productId: string, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = React.useState(1);

    const handleAddToCart = () => {
        onAddToCart(product.id, quantity);
        setQuantity(1); // Reset quantity after adding
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4">
            <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-grow">
                <h3 className="text-gray-900 font-medium">{product.title}</h3>
                <p className="text-gray-700 text-sm">
                    {product.price.toFixed(2)} DH
                </p>
                <p
                    className={`text-xs ${
                        product.stock > 0 ? "text-gray-500" : "text-red-500"
                    }`}
                >
                    Stock: {product.stock}
                </p>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    className="bg-gray-200 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                    -
                </button>
                <span className="text-gray-800 text-sm">{quantity}</span>
                <button
                    className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm"
                    onClick={() => setQuantity((prev) => prev + 1)}
                >
                    +
                </button>
                <button
                    className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 ml-2"
                    onClick={handleAddToCart}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
