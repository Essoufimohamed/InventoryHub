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

import { useEffect, useState } from "react";
import StockActionModal from "../components/StockActionModal";
import axios from "axios";
import HistoryTable from "../components/HistoryTable";
import SectionsTitle from "../components/SectionsTitle";
import api from "../utils/api";

export default function DashboardStock() {
    const [logs, setLogs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [actionType, setActionType] = useState("add");

    const fetchLogs = async () => {
        try {
            const { data } = await api.get("stock/logs");
            setLogs(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                {/* <h1 className="text-2xl font-bold">Stock Management</h1> */}
                <SectionsTitle title={"Stock Management"} />
                <div className="space-x-2">
                    <button
                        onClick={() => {
                            setActionType("add");
                            setIsModalOpen(true);
                        }}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl"
                    >
                        Add Stock
                    </button>
                    <button
                        onClick={() => {
                            setActionType("remove");
                            setIsModalOpen(true);
                        }}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl"
                    >
                        Remove Stock
                    </button>
                </div>
            </div>

            <HistoryTable logs={logs} />
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
