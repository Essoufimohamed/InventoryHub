// ShoppingCart.tsx
import React from "react";
import ShoppingCartItem from "./ShoppingCartItem"; // Assuming ShoppingCartItem is in the same directory

interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

interface ShoppingCartProps {
    cartItems: CartItem[];
    totalAmount: number;
    onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
    cartItems,
    totalAmount,
    onCheckout,
}) => {
    return (
        <div className="   w-80 flex-shrink-0">
            <h2 className="text-center rounded-lg shadow-md bg-white p-4 text-xl font-semibold text-[#146DFF] mb-4">
                Shooping Cart
            </h2>
            <div className="rounded-lg shadow-md bg-white p-4">
                <div className="space-y-2 mb-4 max-h-80 overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500">Cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <ShoppingCartItem key={item.id} item={item} />
                        ))
                    )}
                </div>

                {/* Total and Checkout Button */}
                <button
                    className="w-full bg-green-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 mt-4"
                    onClick={onCheckout}
                    disabled={cartItems.length === 0}
                >
                    Payez Command {totalAmount.toFixed(2)} DH
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
