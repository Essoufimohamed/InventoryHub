// // DayHistoryPage.tsx
// import React, { useEffect, useState } from "react";
// import api from "../utils/api";

// // Assuming you'll have similar interfaces for transactions
// interface Transaction {
//     id: string;
//     time: string;
//     payment: string;
//     amount: number;
//     status: "Completed" | "Refunded" | "On Hold";
//     customer?: string;
//     actions: "View" | "Print" | "Retrieve"; // Or more specific action buttons
// }

// const DUMMY_TRANSACTIONS: Transaction[] = [
//     {
//         id: "TRX12345",
//         time: "10:15 AM",
//         payment: "Cash",
//         amount: 200.0,
//         status: "Completed",
//         customer: "Ahmed Khan",
//     },
//     {
//         id: "TRX12344",
//         time: "09:50 AM",
//         payment: "Card",
//         amount: 50.0,
//         status: "Completed",
//         customer: "Aisha",
//     },
//     {
//         id: "TRX12343",
//         time: "09:30 AM",
//         payment: "Cash",
//         amount: 100.0,
//         status: "On Hold",
//         customer: "Ali Hassan",
//     },
// ];

// const DayHistoryPage: React.FC = () => {
//     const [selectedDate, setSelectedDate] = useState<string>(
//         new Date().toISOString().split("T")[0]
//     );
//     const [searchQuery, setSearchQuery] = useState("");

//     const filteredTransactions = DUMMY_TRANSACTIONS.filter((tx) => {
//         // Add filtering logic based on date and search query
//         return true; // Placeholder
//     });

//     const handleAction = (transactionId: string, action: string) => {
//         alert(`Performing "${action}" for transaction ${transactionId}`);
//         // Implement view, print, retrieve logic here
//     };

//     useEffect(() => {
//         const fetchSales = async () => {
//             try {
//                 const { data } = await api.get("/sales/my-sales");
//                 console.log(data, "my sales");
//             } catch (error) {
//                 console.log(error.message);
//             }
//         };
//         fetchSales();
//     }, []);

//     return (
//         <div className="p-4">
//             <div className="flex items-center space-x-4 mb-6">
//                 <input
//                     type="date"
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={selectedDate}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Search by ID or Customer..."
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//             </div>

//             <div className="bg-white rounded-lg shadow-md p-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                     Transactions for {selectedDate}
//                 </h3>
//                 <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th
//                                 scope="col"
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 Transaction ID
//                             </th>
//                             <th
//                                 scope="col"
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 Time
//                             </th>
//                             <th
//                                 scope="col"
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 Payment
//                             </th>
//                             <th
//                                 scope="col"
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 Amount
//                             </th>
//                             <th
//                                 scope="col"
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 Status
//                             </th>
//                             <th
//                                 scope="col"
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 Actions
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {filteredTransactions.map((tx) => (
//                             <tr key={tx.id}>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                     {tx.id}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                     {tx.time}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                     {tx.payment}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                     {tx.amount.toFixed(2)} DH
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                     {tx.status}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                     {tx.status === "On Hold" ? (
//                                         <button
//                                             className="text-blue-600 hover:text-blue-900 mr-2"
//                                             onClick={() =>
//                                                 handleAction(tx.id, "Retrieve")
//                                             }
//                                         >
//                                             Retrieve
//                                         </button>
//                                     ) : (
//                                         <>
//                                             <button
//                                                 className="text-indigo-600 hover:text-indigo-900 mr-2"
//                                                 onClick={() =>
//                                                     handleAction(tx.id, "View")
//                                                 }
//                                             >
//                                                 View
//                                             </button>
//                                             <button
//                                                 className="text-green-600 hover:text-green-900"
//                                                 onClick={() =>
//                                                     handleAction(tx.id, "Print")
//                                                 }
//                                             >
//                                                 Print
//                                             </button>
//                                         </>
//                                     )}
//                                     {/* Potentially add a Refund button for 'Completed' transactions */}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default DayHistoryPage;

// import react, { useEffect, useState } from "react";
// import { Receipt, Loader2, DollarSign } from "lucide-react";
// import api from "../utils/api";

// export default function DayHistoryPage() {
//     const [sales, setSales] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchSales = async () => {
//             try {
//                 const { data } = await api.get("/sales/my-sales");
//                 setSales(data);
//                 console.log(data);
//             } catch (error) {
//                 console.error("Error fetching sales:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSales();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen text-gray-500">
//                 <Loader2 className="animate-spin mr-2 w-6 h-6" />
//                 Loading sales...
//             </div>
//         );
//     }

//     return (
//         <div className="p-6 space-y-6">
//             <h1 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
//                 <Receipt className="w-6 h-6 text-blue-600" /> My Sales History
//             </h1>

//             {sales.length === 0 ? (
//                 <p className="text-gray-500">No sales found.</p>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//                     {sales.map((sale) => (
//                         <div
//                             key={sale._id}
//                             className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-all border border-gray-100"
//                         >
//                             <div className="flex justify-between items-center mb-3">
//                                 <h2 className="text-sm font-medium text-gray-700">
//                                     Sale #{sale._id.slice(-6)}
//                                 </h2>
//                                 <span
//                                     className={`px-2 py-1 text-xs rounded-full ${
//                                         sale.paymentMethod === "cash"
//                                             ? "bg-green-100 text-green-700"
//                                             : "bg-blue-100 text-blue-700"
//                                     }`}
//                                 >
//                                     {sale.paymentMethod}
//                                 </span>
//                             </div>

//                             <div className="space-y-2 text-sm text-gray-600 border-b pb-2 mb-2">
//                                 {sale.items.map((item, i) => (
//                                     <div
//                                         key={i}
//                                         className="flex justify-between items-center"
//                                     >
//                                         <span>
//                                             {item?.product?.name ||
//                                                 "Unknown Product"}{" "}
//                                             × {item?.qty}
//                                         </span>
//                                         <span>
//                                             {(item?.price * item.qty).toFixed(
//                                                 2
//                                             )}
//                                             MAD
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="flex justify-between items-center text-sm font-semibold text-gray-800">
//                                 <span>Total</span>
//                                 <span className="flex items-center gap-1 text-blue-600">
//                                     <DollarSign className="w-4 h-4" />
//                                     {sale.total.toFixed(2)} MAD
//                                 </span>
//                             </div>

//                             <p className="text-xs text-gray-400 mt-3">
//                                 {new Date(sale.createdAt).toLocaleString()}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { Receipt, Loader2, DollarSign, Info } from "lucide-react";
import api from "../utils/api";

export default function DayHistoryPage() {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const { data } = await api.get("/sales/my-sales");
                setSales(data);
            } catch (error) {
                console.error("Error fetching sales:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSales();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-500">
                <Loader2 className="animate-spin mr-2 w-6 h-6" />
                Loading sales...
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 mb-6">
                <Receipt className="w-6 h-6 text-blue-600" /> My Sales History
            </h1>

            {sales.length === 0 ? (
                <p className="text-gray-500">No sales found.</p>
            ) : (
                <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-100">
                    <table className="min-w-full text-sm text-gray-700">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b border-gray-400">
                            <tr>
                                <th className="px-4 py-3 text-left border-r border-gray-100">
                                    Sale ID
                                </th>
                                <th className="px-4 py-3 text-left">
                                    Products
                                </th>
                                <th className="px-4 py-3 text-left">Payment</th>
                                <th className="px-4 py-3 text-left">Total</th>
                                <th className="px-4 py-3 text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map((sale) => (
                                <tr
                                    key={sale._id}
                                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3 font-medium text-gray-800 border-r border-gray-100">
                                        #{sale._id.slice(-6)}
                                    </td>

                                    {/* Tooltip for products */}
                                    <td className="px-4 py-3 relative group cursor-pointer">
                                        <div className="flex items-center gap-1">
                                            <Info className="w-4 h-4 text-blue-500" />
                                            <span>
                                                {sale.items.length} items
                                            </span>
                                        </div>

                                        {/* Tooltip content */}
                                        <div className="absolute z-10 hidden group-hover:block bg-white text-gray-700 text-xs rounded-lg shadow-lg border border-gray-200 w-56 p-3 left-0 top-full mt-2">
                                            <h3 className="font-semibold text-gray-800 mb-1">
                                                Products:
                                            </h3>
                                            <ul className="space-y-1">
                                                {sale.items.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex justify-between text-gray-600"
                                                    >
                                                        <span>
                                                            {item?.product
                                                                ?.name ||
                                                                "Unknown"}{" "}
                                                            × {item?.qty}
                                                        </span>
                                                        <span>
                                                            {(
                                                                (item?.product
                                                                    ?.price ||
                                                                    0) *
                                                                item?.qty
                                                            ).toFixed(2)}{" "}
                                                            MAD
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </td>

                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                sale.paymentMethod === "cash"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-blue-100 text-blue-700"
                                            }`}
                                        >
                                            {sale.paymentMethod}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 text-blue-600 font-semibold flex items-center gap-1">
                                        <DollarSign className="w-4 h-4" />
                                        {sale.total.toFixed(2)} MAD
                                    </td>

                                    <td className="px-4 py-3 text-gray-500">
                                        {new Date(
                                            sale.createdAt
                                        ).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
