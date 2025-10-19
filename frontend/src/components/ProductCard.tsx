// // ProductCard.tsx
// import React from "react";

// interface Product {
//     id: string;
//     image: string; // URL or base64
//     title: string;
//     price: number; // Assuming DH currency is handled at display level
//     stock: number;
// }

// interface ProductCardProps {
//     product: Product;
//     onAddToCart: (productId: string, quantity: number) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//     const [quantity, setQuantity] = React.useState(1);

//     const handleAddToCart = () => {
//         onAddToCart(product.id, quantity);
//         setQuantity(1); // Reset quantity after adding
//     };

//     return (
//         <div className="relative bg-white rounded-lg shadow-sm p-4 flexx items-center space-x-4">
//             <div className="absolute  right-0 top-0 bg-blue-300 rotate-90">
//                 {product.stock > 10 ? "On stock" : "Out Stock"}
//             </div>
//             <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-26 object-containe rounded-md"
//             />
//             <div className="flex-grow">
//                 <h3 className="text-gray-900 font-medium">{product.title}</h3>
//                 <p className="text-gray-700 text-sm">
//                     {product.price.toFixed(2)} DH
//                 </p>
//                 <p
//                     className={`text-xs ${
//                         product.stock > 0 ? "text-gray-500" : "text-red-500"
//                     }`}
//                 >
//                     Stock: {product.stock}
//                 </p>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <button
//                     className="bg-gray-200 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm"
//                     onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
//                 >
//                     -
//                 </button>
//                 <span className="text-gray-800 text-sm">{quantity}</span>
//                 <button
//                     className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm"
//                     onClick={() => setQuantity((prev) => prev + 1)}
//                 >
//                     +
//                 </button>
//                 <button
//                     className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 ml-2"
//                     onClick={handleAddToCart}
//                 >
//                     Add
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;

// ProductCard.tsx
// import React from "react";

// interface Product {
//     id: string;
//     image: string;
//     title: string;
//     price: number;
//     stock: number;
// }

// interface ProductCardProps {
//     product: Product;
//     onAddToCart: (productId: string, quantity: number) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//     const [quantity, setQuantity] = React.useState(1);

//     const handleAddToCart = () => {
//         onAddToCart(product.id, quantity);
//         setQuantity(1);
//     };

//     return (
//         <div className="relative bg-white rounded-lg p-2 shadow-md overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
//             {/* Product Image */}
//             <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
//             />

//             {/* Stock Badge */}
//             <div
//                 className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-md ${
//                     product.stock > 0
//                         ? "bg-green-500 text-white"
//                         : "bg-red-500 text-white"
//                 }`}
//             >
//                 {product.stock > 0 ? "In Stock" : "Out of Stock"}
//             </div>

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
//                 <div>
//                     <h3 className="font-semibold text-md">{product.title}</h3>
//                     <p className="text-gray-200 text-sm">
//                         {product.price.toFixed(2)} DH
//                     </p>
//                     {/* <p
//                         className={`text-xs mt-1 ${
//                             product.stock > 0 ? "text-gray-300" : "text-red-400"
//                         }`}
//                     >
//                         Stock: {product.stock}
//                     </p> */}
//                 </div>

//                 {/* Quantity Controls & Add Button */}
//                 <div className="flex items-center space-x-2 mt-3">
//                     <button
//                         className="bg-gray-200 text-gray-800 w-6 h-6 rounded-full flex items-center justify-center text-sm"
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             setQuantity((prev) => Math.max(1, prev - 1));
//                         }}
//                     >
//                         -
//                     </button>

//                     <span className="text-gray-100 text-sm">{quantity}</span>

//                     <button
//                         className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm"
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             setQuantity((prev) => prev + 1);
//                         }}
//                     >
//                         +
//                     </button>

//                     <button
//                         className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 active:scale-95 transition ml-2"
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             handleAddToCart();
//                         }}
//                     >
//                         Add
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;

// ProductCard.jsx
import { useCartStore } from "../stores/useCartStore";

export default function ProductCard({ product }) {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <div
            className="bg-white p-4 rounded-2xl shadow cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => addItem(product)}
        >
            <img
                src={product.image}
                className="h-40 w-full object-cover mx-auto rounded-xl mb-2"
            />
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            {/* <div className="mt-3">
                <button
                    onClick={() => addItem(product)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                >
                    + Add
                </button>
            </div> */}
        </div>
    );
}
