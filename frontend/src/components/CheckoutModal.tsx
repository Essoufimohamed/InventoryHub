// import React from "react";
// import { useCartStore } from "../stores/useCartStore";
// import { X } from "lucide-react";

// export default function CheckoutModal({ isOpen, onClose, onConfirm }) {
//     if (!isOpen) return null;
//     const items = useCartStore((state) => state.items);
//     const getTotal = useCartStore((state) => state.getSubtotal);
//     const clearCart = useCartStore((state) => state.clearCart);
//     return (
//         <div className="fixed inset-0 bg-[#00000060] bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
//                 <div className="flex justify-between items-center border-b pb-3 mb-4">
//                     <h2 className="text-xl font-semibold">Checkout Summary</h2>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-700"
//                     >
//                         <X />
//                     </button>
//                 </div>

//                 <div className="space-y-4 mb-6">
//                     {items.map((item, index) => (
//                         <div
//                             key={index}
//                             className="flex justify-between items-center"
//                         >
//                             <div>
//                                 <p className="text-gray-800">{item.name}</p>
//                                 <p className="text-sm text-gray-500">
//                                     {item.qty} &times; ${item.price.toFixed(2)}
//                                 </p>
//                             </div>
//                             <p className="font-medium">
//                                 ${(item.qty * item.price).toFixed(2)}
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="flex justify-between items-center border-t pt-4 mt-4">
//                     <p className="text-lg font-semibold">Total:</p>
//                     <p className="text-lg font-semibold">
//                         ${getTotal().toFixed(2)}
//                     </p>
//                 </div>

//                 <div className="flex justify-end space-x-3 mt-6">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={onConfirm}
//                         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
//                     >
//                         Confirm Checkout
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from "react";
import { useCartStore } from "../stores/useCartStore";
import { X, ShoppingCart, DollarSign, Package } from "lucide-react"; // Added new icons

export default function CheckoutModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    const items = useCartStore((state) => state.items);
    const getTotal = useCartStore((state) => state.getSubtotal);

    // Calculate total quantity for a more informative summary
    const totalQuantity = items.reduce((sum, item) => sum + item.qty, 0);

    return (
        <div className="fixed inset-0 bg-[#00000060] bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className=" bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
                    aria-label="Close checkout summary"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-6">
                    <ShoppingCart className="w-7 h-7 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-800">
                        Checkout Summary
                    </h2>
                </div>

                {/* Cart Items List */}
                <div className="space-y-4 max-h-72 overflow-y-auto pr-2 mb-6 border-b border-gray-100 pb-4">
                    {items.length === 0 ? (
                        <p className="text-center text-gray-500 py-4">
                            Your cart is empty.
                        </p>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item._id} // Use item._id for unique key if available
                                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-10 h-10 object-cover rounded-md border border-gray-200"
                                        />
                                    )}
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {item.qty}{" "}
                                            <span className="text-gray-400">
                                                ×
                                            </span>{" "}
                                            ${item.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <p className="font-semibold text-gray-900">
                                    ${(item.qty * item.price).toFixed(2)}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                {/* Summary Totals */}
                <div className="space-y-2 mb-6 pt-2">
                    <div className="flex justify-between items-center text-gray-700">
                        <p className="flex items-center gap-2 text-base">
                            <Package className="w-5 h-5 text-gray-500" />
                            Total Items:
                        </p>
                        <p className="font-semibold">{totalQuantity}</p>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
                        <p className="flex items-center gap-2">
                            <DollarSign className="w-6 h-6 text-blue-600" />
                            Total:
                        </p>
                        <p>${getTotal().toFixed(2)}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 shadow-md"
                    >
                        Confirm Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
