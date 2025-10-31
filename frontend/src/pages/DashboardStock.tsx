// import HistoryFilter from "../components/HistoryFilter";
// import HistoryTable from "../components/HistoryTable";
// import SectionsTitle from "../components/SectionsTitle";

// export default function DashboardStock() {
//     return (
//         <>
//             <SectionsTitle title={"Stock History"} />
//             <HistoryFilter />
//             <HistoryTable />
//         </>
//     );
// }

// import { useEffect, useState } from "react";
// import StockActionModal from "../components/StockActionModal";
// import axios from "axios";
// import HistoryTable from "../components/HistoryTable";
// import SectionsTitle from "../components/SectionsTitle";
// import api from "../utils/api";

// export default function DashboardStock() {
//     const [logs, setLogs] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [actionType, setActionType] = useState("add");

//     const fetchLogs = async () => {
//         try {
//             const { data } = await api.get("stock/logs");
//             setLogs(data);
//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchLogs();
//     }, []);

//     return (
//         <div className="p-6">
//             <div className="flex items-center justify-between mb-6">
//                 {/* <h1 className="text-2xl font-bold">Stock Management</h1> */}
//                 <SectionsTitle title={"Stock Management"} />
//                 <div className="space-x-2">
//                     <button
//                         onClick={() => {
//                             setActionType("add");
//                             setIsModalOpen(true);
//                         }}
//                         className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-xl"
//                     >
//                         Add Stock
//                     </button>
//                     <button
//                         onClick={() => {
//                             setActionType("remove");
//                             setIsModalOpen(true);
//                         }}
//                         className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-xl"
//                     >
//                         Remove Stock
//                     </button>
//                 </div>
//             </div>

//             {logs.length > 0 && <HistoryTable logs={logs} />}
//             {isModalOpen && (
//                 <StockActionModal
//                     action={actionType}
//                     onClose={() => setIsModalOpen(false)}
//                     onSuccess={fetchLogs}
//                 />
//             )}
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import StockActionModal from "../components/StockActionModal";
import HistoryTable from "../components/HistoryTable";
import SectionsTitle from "../components/SectionsTitle";
import api from "../utils/api";
import { PlusCircle, MinusCircle, Package, History } from "lucide-react"; // Added icons for a more visual appeal
import { toast } from "react-hot-toast"; // Assuming toast is already configured

export default function DashboardStock() {
    const [logs, setLogs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [actionType, setActionType] = useState("add"); // "add" or "remove"
    const [loadingLogs, setLoadingLogs] = useState(true); // New loading state for logs

    const fetchLogs = async () => {
        setLoadingLogs(true); // Start loading
        try {
            const { data } = await api.get("stock/logs");
            setLogs(data);
        } catch (error) {
            console.error("Failed to fetch stock logs:", error);
            toast.error("Failed to fetch stock logs.");
        } finally {
            setLoadingLogs(false); // End loading
        }
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    const handleOpenModal = (type) => {
        setActionType(type);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-3 sm:p-8 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-gray-200">
                <SectionsTitle title="Stock Management" />
                <div className="mt-4 sm:mt-0 flex flex-wrap gap-3">
                    <button
                        onClick={() => handleOpenModal("add")}
                        className="px-4 py-2 bg-green-500 hover:bg-green-700   flex items-center gap-2  text-white font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        <PlusCircle className="w-5 h-5" /> Add Stock
                    </button>
                    <button
                        onClick={() => handleOpenModal("remove")}
                        className="flex items-center gap-2 px-5 py-2 bg-red-500 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                        <MinusCircle className="w-5 h-5" /> Remove Stock
                    </button>
                </div>
            </div>

            {/* Stock History Section */}
            <div className=" rounded-lg shadow-lg border border-gray-100">
                {loadingLogs ? (
                    <div className="flex items-center justify-center py-10 text-gray-600">
                        <svg
                            className="animate-spin -ml-1 mr-3 h-6 w-6 text-blue-500"
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
                        Loading stock logs...
                    </div>
                ) : logs.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                        <p className="text-lg">
                            No stock history logs available.
                        </p>
                        <p className="text-sm mt-1">
                            Add or remove stock to see history here.
                        </p>
                    </div>
                ) : (
                    <HistoryTable logs={logs} />
                )}
            </div>

            {isModalOpen && (
                <StockActionModal
                    action={actionType}
                    onClose={() => setIsModalOpen(false)}
                    onSuccess={fetchLogs}
                />
            )}
        </div>
    );
}
