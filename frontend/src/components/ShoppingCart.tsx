// // ShoppingCart.tsx
// import React from "react";
// import ShoppingCartItem from "./ShoppingCartItem"; // Assuming ShoppingCartItem is in the same directory

// interface CartItem {
//     id: string;
//     image: string;
//     title: string;
//     price: number;
//     quantity: number;
// }

// interface ShoppingCartProps {
//     cartItems: CartItem[];
//     totalAmount: number;
//     onCheckout: () => void;
// }

// const ShoppingCart: React.FC<ShoppingCartProps> = ({
//     cartItems,
//     totalAmount,
//     onCheckout,
// }) => {
//     return (
//         <div className="   w-84 flex-shrink-0">
//             <h2 className="text-center rounded-lg shadow-md bg-white p-4 text-xl font-semibold text-[#146DFF] mb-4">
//                 Shooping Cart
//             </h2>
//             <div className="rounded-lg shadow-md bg-white p-4">
//                 <div className="space-y-2 mb-4 max-h-80 overflow-y-auto">
//                     {cartItems.length === 0 ? (
//                         <p className="text-gray-500">Cart is empty.</p>
//                     ) : (
//                         cartItems.map((item) => (
//                             <ShoppingCartItem key={item.id} item={item} />
//                         ))
//                     )}
//                 </div>

//                 {/* Total and Checkout Button */}
//                 <button
//                     className="w-full bg-green-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 mt-4"
//                     onClick={onCheckout}
//                     disabled={cartItems.length === 0}
//                 >
//                     Payez Command {totalAmount.toFixed(2)} DH
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ShoppingCart;

// // CartSidebar.jsx
// import React from "react";
// import { useCartStore } from "../stores/useCartStore";
// // import { useCashier } from "../context/CashierContext";
// import CartItem from "./ShoppingCartItem";

// export default function ShoppingCart() {
//     // const { cartOpen, closeCart } = useCashier();
//     const items = useCartStore((state) => state.items);
//     const subtotal = useCartStore((state) => state.getSubtotal());
//     const clearCart = useCartStore((state) => state.clearCart);

//     return (
//         <div className={` w-70 shadow-xl rounded-lg`}>
//             <div className="bg-white p-4 flex items-center justify-between border-b">
//                 <h2 className="text-lg font-medium">Cart</h2>
//                 <div className="flex gap-2">
//                     <button
//                         onClick={() => {
//                             clearCart();
//                         }}
//                         className="text-sm text-red-600"
//                     >
//                         Clear
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-white">
//                 <div className="p-4 overflow-auto h-[calc(100%-160px)]">
//                     {items.length === 0 ? (
//                         <p className="text-sm text-gray-500">Cart is empty</p>
//                     ) : (
//                         items.map((item) => (
//                             <CartItem key={item.id} item={item} />
//                         ))
//                     )}
//                 </div>
//                 <div className="p-4 border-t">
//                     <div className="flex justify-between">
//                         <span className="font-medium">Subtotal</span>
//                         <span className="font-medium">
//                             ${subtotal.toFixed(2)}
//                         </span>
//                     </div>
//                     <div className="mt-3 flex gap-2">
//                         <button className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded">
//                             Checkout
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// CartSidebar.jsx
import React from "react";
import { useCartStore } from "../stores/useCartStore";
import CartItem from "./ShoppingCartItem";
import { Trash2 } from "lucide-react"; // ✅ Lucide icons

export default function ShoppingCart() {
    const items = useCartStore((state) => state.items);
    const subtotal = useCartStore((state) => state.getSubtotal());
    const clearCart = useCartStore((state) => state.clearCart);

    return (
        <div className="w-100 flex flex-col h-[95vh] bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[#8eb9ff] px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                    {/* <ShoppingCart className="h-6 w-6 text-gray-600" /> */}
                    Shopping Cart
                </h2>
                <div className="flex items-center gap-3 bg-white p-1 rounded-xl">
                    <button
                        onClick={clearCart}
                        className="p-2 text-sm font-medium text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors duration-200"
                        title="Clear all items from cart"
                    >
                        <Trash2 className="h-5 w-5" />
                        Clear
                    </button>
                </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                        {/* <ShoppingCart className="h-20 w-20 mb-4 text-gray-300" /> */}
                        <p className="text-xl font-medium mb-2">
                            Your cart is empty
                        </p>
                        <p className="text-sm">
                            Add some items to get started!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {items.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-4">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
