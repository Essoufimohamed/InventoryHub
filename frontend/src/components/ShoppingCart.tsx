// import { useState } from "react";
// import { useCartStore } from "../stores/useCartStore";
// import CartItem from "./ShoppingCartItem";
// import { Trash2 } from "lucide-react"; // ✅ Lucide icons
// import CheckoutModal from "./CheckoutModal";
// import toast from "react-hot-toast";
// import api from "../utils/api";
// import ReceiptModal from "./ReceiptModal";

// export default function ShoppingCart() {
//     const items = useCartStore((state) => state.items);
//     const subtotal = useCartStore((state) => state.getSubtotal);
//     const clearCart = useCartStore((state) => state.clearCart);

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleConfirmCheckout = async () => {
//         try {
//             const { data } = await api.post("/sales", { items });
//             if (data) {
//                 toast.success("sale success");

//                 console.log("Checkout confirmed!");
//                 clearCart();
//                 setIsModalOpen(false);
//             } else {
//                 console.log(data);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//         setIsModalOpen(false); // Close the modal after confirmation
//     };
//     return (
//         <>
//             <div className="w-100 flex flex-col h-[95vh] bg-white shadow-xl rounded-lg overflow-hidden">
//                 {/* Header */}
//                 <div className="bg-[#8eb9ff] px-6 py-4 border-b border-gray-100 flex items-center justify-between">
//                     <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
//                         {/* <ShoppingCart className="h-6 w-6 text-gray-600" /> */}
//                         Shopping Cart
//                     </h2>
//                     <div className="flex items-center gap-3 bg-white p-1 rounded-xl">
//                         <button
//                             onClick={clearCart}
//                             className="p-2 text-sm font-medium text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors duration-200"
//                             title="Clear all items from cart"
//                         >
//                             <Trash2 className="h-5 w-5" />
//                             Clear
//                         </button>
//                     </div>
//                 </div>

//                 {/* Cart Items */}
//                 <div className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
//                     {items.length === 0 ? (
//                         <div className="flex flex-col items-center justify-center h-full text-gray-500">
//                             {/* <ShoppingCart className="h-20 w-20 mb-4 text-gray-300" /> */}
//                             <p className="text-xl font-medium mb-2">
//                                 Your cart is empty
//                             </p>
//                             <p className="text-sm">
//                                 Add some items to get started!
//                             </p>
//                         </div>
//                     ) : (
//                         <div className="space-y-3">
//                             {items.map((item) => (
//                                 <CartItem key={item._id} item={item} />
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Footer */}
//                 <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
//                     <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-4">
//                         <span>Subtotal</span>
//                         <span>${subtotal().toFixed(2)}</span>
//                     </div>
//                     <button
//                         onClick={() => setIsModalOpen(true)}
//                         className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                         Proceed to Checkout
//                     </button>
//                 </div>
//             </div>
//             {items.length > 0 && (
//                 <CheckoutModal
//                     isOpen={isModalOpen}
//                     onClose={() => setIsModalOpen(false)}
//                     onConfirm={handleConfirmCheckout}
//                 />
//             )}

//             <ReceiptModal isOpen={} saleDetails={items} onClose={} />
//         </>
//     );
// }

import { useState } from "react";
import { useCartStore } from "../stores/useCartStore";
import CartItem from "./ShoppingCartItem";
import { Trash2 } from "lucide-react";
import CheckoutModal from "./CheckoutModal";
import ReceiptModal from "./ReceiptModal"; // Make sure this path is correct
import toast from "react-hot-toast";
import api from "../utils/api";

export default function ShoppingCart() {
    const items = useCartStore((state) => state.items);
    const subtotal = useCartStore((state) => state.getSubtotal);
    const clearCart = useCartStore((state) => state.clearCart);

    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false); // Renamed for clarity
    const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false); // New state for ReceiptModal
    const [saleDetails, setSaleDetails] = useState(null); // State to store sale details

    const handleConfirmCheckout = async () => {
        try {
            const { data } = await api.post("/sales", { items });
            if (data) {
                toast.success("Sale successful!");
                console.log("Checkout confirmed! Sale Data:", data);
                console.log(items);

                setSaleDetails(data); // Store sale details from the API response
                clearCart();
                setIsCheckoutModalOpen(false); // Close the checkout modal
                setIsReceiptModalOpen(true); // Open the receipt modal
            } else {
                console.log("No data received from sale:", data);
                toast.error("Sale failed: No data.");
            }
        } catch (error) {
            console.error("Error during checkout:", error);
            toast.error(`Error during checkout: ${error.message}`);
        }
    };

    return (
        <>
            <div className="w-100 flex flex-col h-[95vh] bg-white shadow-xl rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-[#8eb9ff] px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
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
                                <CartItem key={item._id} item={item} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
                    <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-4">
                        <span>Subtotal</span>
                        <span>${subtotal().toFixed(2)}</span>
                    </div>
                    <button
                        onClick={() => setIsCheckoutModalOpen(true)} // Open checkout modal
                        disabled={items.length === 0} // Disable if cart is empty
                        className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                            ${
                                items.length === 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>

            {/* Render CheckoutModal */}
            {items.length > 0 && (
                <CheckoutModal
                    isOpen={isCheckoutModalOpen}
                    onClose={() => setIsCheckoutModalOpen(false)}
                    onConfirm={handleConfirmCheckout}
                />
            )}

            {/* Render ReceiptModal */}
            <ReceiptModal
                isOpen={isReceiptModalOpen}
                saleDetails={saleDetails} // Pass the saleDetails from state
                onClose={() => setIsReceiptModalOpen(false)} // Function to close the receipt modal
            />
        </>
    );
}
