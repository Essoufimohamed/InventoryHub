// ShoppingCartItem.tsx
import React from "react";

interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

interface ShoppingCartItemProps {
    item: CartItem;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item }) => {
    return (
        <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
            <p className="text-gray-800 text-sm">
                {item.title}
                <span className="text-gray-500 ml-1">x {item.quantity}</span>
            </p>
            <p className="text-gray-900 font-medium">
                {(item.price * item.quantity).toFixed(2)} DH
            </p>
        </div>
    );
};

export default ShoppingCartItem;
