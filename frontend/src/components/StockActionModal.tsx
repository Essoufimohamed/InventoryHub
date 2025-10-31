// import { useEffect, useState } from "react";
// import axios from "axios";
// import api from "../utils/api";

// export default function StockActionModal({ action, onClose, onSuccess }) {
//     const [products, setProducts] = useState([]);
//     const [clients, setClients] = useState([]);
//     const [form, setForm] = useState({
//         productId: "",
//         quantity: "",
//         clientId: "",
//         note: "",
//     });
//     const [loading, setLoading] = useState(false);

//     const fetchData = async () => {
//         try {
//             const [productRes, clientRes] = await Promise.all([
//                 api.get("product"),
//                 axios.get("/users?role=client"),
//             ]);
//             setProducts(productRes.data);
//             setClients(clientRes.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             await api.post(`stock/${action}`, form);
//             onSuccess();
//             onClose();
//         } catch (error) {
//             console.error(error.response?.data || error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//             <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
//                 <h2 className="text-xl font-semibold mb-4">
//                     {action === "add" ? "Add Stock" : "Remove Stock for Client"}
//                 </h2>
//                 <form onSubmit={handleSubmit} className="space-y-3">
//                     <div>
//                         <label className="block text-sm font-medium">
//                             Product
//                         </label>
//                         <select
//                             className="w-full border rounded-md p-2"
//                             value={form.productId}
//                             onChange={(e) =>
//                                 setForm({ ...form, productId: e.target.value })
//                             }
//                             required
//                         >
//                             <option value="">Select product</option>
//                             {products.map((p) => (
//                                 <option key={p._id} value={p._id}>
//                                     {p.name}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium">
//                             Quantity
//                         </label>
//                         <input
//                             type="number"
//                             min="1"
//                             className="w-full border rounded-md p-2"
//                             value={form.quantity}
//                             onChange={(e) =>
//                                 setForm({ ...form, quantity: e.target.value })
//                             }
//                             required
//                         />
//                     </div>

//                     {action === "remove" && (
//                         <div>
//                             <label className="block text-sm font-medium">
//                                 Client
//                             </label>
//                             <select
//                                 className="w-full border rounded-md p-2"
//                                 value={form.clientId}
//                                 onChange={(e) =>
//                                     setForm({
//                                         ...form,
//                                         clientId: e.target.value,
//                                     })
//                                 }
//                                 required
//                             >
//                                 <option value="">Select client</option>
//                                 {clients.map((c) => (
//                                     <option key={c._id} value={c._id}>
//                                         {c.name}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     )}

//                     <div>
//                         <label className="block text-sm font-medium">
//                             Note (optional)
//                         </label>
//                         <input
//                             type="text"
//                             className="w-full border rounded-md p-2"
//                             value={form.note}
//                             onChange={(e) =>
//                                 setForm({ ...form, note: e.target.value })
//                             }
//                         />
//                     </div>

//                     <div className="flex justify-end space-x-2 mt-4">
//                         <button type="button" onClick={onClose}>
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className={
//                                 action === "add"
//                                     ? "bg-green-600 hover:bg-green-700"
//                                     : "bg-red-600 hover:bg-red-700"
//                             }
//                             disabled={loading}
//                         >
//                             {loading
//                                 ? "Processing..."
//                                 : action === "add"
//                                 ? "Add Stock"
//                                 : "Remove Stock"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext"; // ✅ make sure you have this hook
// import api from "../utils/api";

// export default function StockActionModal({ action, onClose, onSuccess }) {
//     const { user } = useContext(AuthContext); // ✅ current logged-in user (admin or cashier)
//     const [products, setProducts] = useState([]);
//     const [form, setForm] = useState({
//         productId: "",
//         quantity: 0,
//         // note: "",
//     });

//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const { data } = await api.get("/product");
//                 setProducts(data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchProducts();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             // ✅ Include the connected user ID automatically
//             // const payload = {
//             //     ...form,

//             // };
//             const payload = {
//                 productId: form.productId,
//                 quantity: Number(form.quantity),
//                 userId: user?.id, // cashier/admin performing the action
//                 // note: form.note,
//             };

//             console.log(payload);

//             await api.post(`stock/${action}`, payload);
//             onSuccess();
//             onClose();
//         } catch (error) {
//             console.error(error.response?.data || error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-[#00000060] bg-opacity-40 flex items-center justify-center z-50">
//             <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
//                 <h2 className="text-xl font-semibold mb-4">
//                     {action === "add" ? "Add Stock" : "Remove Stock"}
//                 </h2>

//                 <form onSubmit={handleSubmit} className="space-y-3">
//                     <div>
//                         <label className="block text-sm font-medium">
//                             Product
//                         </label>
//                         <select
//                             className="w-full border rounded-md p-2"
//                             value={form.productId}
//                             onChange={(e) =>
//                                 setForm({ ...form, productId: e.target.value })
//                             }
//                             required
//                         >
//                             <option value="">Select product</option>
//                             {products.map((p) => (
//                                 <option key={p._id} value={p._id}>
//                                     {p.name}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium">
//                             Quantity
//                         </label>
//                         <input
//                             type="number"
//                             min="1"
//                             className="w-full border rounded-md p-2"
//                             value={form.quantity}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     quantity: parseInt(e.target.value),
//                                 })
//                             }
//                             required
//                         />
//                     </div>

//                     <div className="flex justify-end space-x-2 mt-4">
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="px-4 py-2 border rounded-md"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className={`px-4 py-2 text-white rounded-md ${
//                                 action === "add"
//                                     ? "bg-green-600 hover:bg-green-700"
//                                     : "bg-red-600 hover:bg-red-700"
//                             }`}
//                             disabled={loading}
//                         >
//                             {loading
//                                 ? "Processing..."
//                                 : action === "add"
//                                 ? "Add Stock"
//                                 : "Remove Stock"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/api";
import { toast } from "react-hot-toast"; // Assuming you have react-hot-toast for notifications
import { X, Package, Plus, Minus, ChevronDown } from "lucide-react"; // Added icons

export default function StockActionModal({ action, onClose, onSuccess }) {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        productId: "",
        quantity: "", // Changed to empty string for initial input
    });
    const [currentStock, setCurrentStock] = useState(0); // State to hold current stock
    const [loading, setLoading] = useState(false);
    const [fetchingProducts, setFetchingProducts] = useState(true); // New state for product fetching
    const [errors, setErrors] = useState({}); // State for form errors

    useEffect(() => {
        const fetchProducts = async () => {
            setFetchingProducts(true);
            try {
                const { data } = await api.get("/product");
                setProducts(data);
                if (data.length > 0) {
                    // Pre-select the first product if available
                    setForm((prev) => ({ ...prev, productId: data[0]._id }));
                    setCurrentStock(data[0].quantity);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                toast.error("Failed to load products.");
            } finally {
                setFetchingProducts(false);
            }
        };
        fetchProducts();
    }, []);

    // Update currentStock when selected product changes
    useEffect(() => {
        const selectedProduct = products.find((p) => p._id === form.productId);
        setCurrentStock(selectedProduct ? selectedProduct.quantity : 0);
    }, [form.productId, products]);

    const validateForm = () => {
        const newErrors = {};
        if (!form.productId) {
            newErrors.productId = "Please select a product.";
        }
        if (Number(form.quantity) <= 0 || form.quantity === "") {
            newErrors.quantity = "Quantity must be a positive number.";
        }
        if (action === "remove" && Number(form.quantity) > currentStock) {
            newErrors.quantity = `Cannot remove more than available stock (${currentStock}).`;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            const payload = {
                productId: form.productId,
                quantity: Number(form.quantity),
                userId: user?.id,
            };

            await api.post(`stock/${action}`, payload);
            toast.success(
                `Stock ${action === "add" ? "added" : "removed"} successfully!`
            );
            onSuccess();
            onClose();
        } catch (error) {
            const errorMessage =
                error.response?.data?.message ||
                "An unexpected error occurred.";
            console.error(
                "Stock action failed:",
                error.response?.data || error.message
            );
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        // Allow empty string for clearing input, and validate as number later
        if (value === "" || /^[0-9]+$/.test(value)) {
            setForm({ ...form, quantity: value });
            setErrors((prev) => ({ ...prev, quantity: undefined })); // Clear error on change
        }
    };

    const handleProductChange = (e) => {
        setForm({ ...form, productId: e.target.value, quantity: "" }); // Reset quantity when product changes
        setErrors((prev) => ({ ...prev, productId: undefined })); // Clear error on change
    };

    return (
        <div className="fixed inset-0 bg-[#00000060] bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    {action === "add" ? (
                        <Plus className="w-6 h-6 text-green-600" />
                    ) : (
                        <Minus className="w-6 h-6 text-red-600" />
                    )}
                    {action === "add" ? "Add Stock" : "Remove Stock"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Product Select */}
                    <div>
                        <label
                            htmlFor="productId"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Select Product
                        </label>
                        <div className="relative">
                            <select
                                id="productId"
                                className={`w-full border ${
                                    errors.productId
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white text-gray-800 ${
                                    fetchingProducts
                                        ? "opacity-70 cursor-not-allowed"
                                        : ""
                                }`}
                                value={form.productId}
                                onChange={handleProductChange}
                                required
                                disabled={fetchingProducts || loading}
                            >
                                {fetchingProducts ? (
                                    <option value="">
                                        Loading products...
                                    </option>
                                ) : (
                                    <>
                                        <option value="">
                                            Choose a product
                                        </option>
                                        {products.map((p) => (
                                            <option key={p._id} value={p._id}>
                                                {p.name}
                                            </option>
                                        ))}
                                    </>
                                )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <ChevronDown className="w-4 h-4" />{" "}
                                {/* Assuming ChevronDown is imported */}
                            </div>
                        </div>
                        {errors.productId && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.productId}
                            </p>
                        )}
                    </div>

                    {/* Current Stock Display */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md text-blue-800">
                        <div className="flex items-center gap-2">
                            <Package className="w-5 h-5" />
                            <span className="font-medium">Current Stock:</span>
                            <span className="font-bold text-lg">
                                {currentStock} units
                            </span>
                        </div>
                    </div>

                    {/* Quantity Input */}
                    <div>
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Quantity to {action === "add" ? "Add" : "Remove"}
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            min="1"
                            step="1"
                            className={`w-full border ${
                                errors.quantity
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 text-gray-800`}
                            value={form.quantity}
                            onChange={handleQuantityChange}
                            required
                            disabled={loading}
                        />
                        {errors.quantity && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.quantity}
                            </p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`px-5 py-2.5 text-white font-medium rounded-lg shadow-md transition-colors duration-200 ${
                                action === "add"
                                    ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                                    : "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                            } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                            disabled={loading || fetchingProducts}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : action === "add" ? (
                                "Add Stock"
                            ) : (
                                "Remove Stock"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
