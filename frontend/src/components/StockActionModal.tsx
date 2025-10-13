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

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext"; // ✅ make sure you have this hook
import api from "../utils/api";

export default function StockActionModal({ action, onClose, onSuccess }) {
    const { user } = useContext(AuthContext); // ✅ current logged-in user (admin or cashier)
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        productId: "",
        quantity: 0,
        // note: "",
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await api.get("/product");
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // ✅ Include the connected user ID automatically
            // const payload = {
            //     ...form,

            // };
            const payload = {
                productId: form.productId,
                quantity: Number(form.quantity),
                userId: user?.id, // cashier/admin performing the action
                // note: form.note,
            };

            console.log(payload);

            await api.post(`stock/${action}`, payload);
            onSuccess();
            onClose();
        } catch (error) {
            console.error(error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-[#00000060] bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
                <h2 className="text-xl font-semibold mb-4">
                    {action === "add" ? "Add Stock" : "Remove Stock"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium">
                            Product
                        </label>
                        <select
                            className="w-full border rounded-md p-2"
                            value={form.productId}
                            onChange={(e) =>
                                setForm({ ...form, productId: e.target.value })
                            }
                            required
                        >
                            <option value="">Select product</option>
                            {products.map((p) => (
                                <option key={p._id} value={p._id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Quantity
                        </label>
                        <input
                            type="number"
                            min="1"
                            className="w-full border rounded-md p-2"
                            value={form.quantity}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    quantity: parseInt(e.target.value),
                                })
                            }
                            required
                        />
                    </div>

                    {/* <div>
                        <label className="block text-sm font-medium">
                            Note (optional)
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-2"
                            value={form.note}
                            onChange={(e) =>
                                setForm({ ...form, note: e.target.value })
                            }
                        />
                    </div> */}

                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`px-4 py-2 text-white rounded-md ${
                                action === "add"
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-red-600 hover:bg-red-700"
                            }`}
                            disabled={loading}
                        >
                            {loading
                                ? "Processing..."
                                : action === "add"
                                ? "Add Stock"
                                : "Remove Stock"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
