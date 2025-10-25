import React from "react";
import { useCartStore } from "../stores/useCartStore";
import { X } from "lucide-react";

export default function CheckoutModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
    const items = useCartStore((state) => state.items);
    const getTotal = useCartStore((state) => state.getSubtotal);
    const clearCart = useCartStore((state) => state.clearCart);
    return (
        <div className="fixed inset-0 bg-[#00000060] bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 className="text-xl font-semibold">Checkout Summary</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X />
                    </button>
                </div>

                <div className="space-y-4 mb-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <div>
                                <p className="text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-500">
                                    {item.qty} &times; ${item.price.toFixed(2)}
                                </p>
                            </div>
                            <p className="font-medium">
                                ${(item.qty * item.price).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center border-t pt-4 mt-4">
                    <p className="text-lg font-semibold">Total:</p>
                    <p className="text-lg font-semibold">
                        ${getTotal().toFixed(2)}
                    </p>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                    >
                        Confirm Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
