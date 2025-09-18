// DayHistoryPage.tsx
import React, { useState } from "react";

// Assuming you'll have similar interfaces for transactions
interface Transaction {
    id: string;
    time: string;
    payment: string;
    amount: number;
    status: "Completed" | "Refunded" | "On Hold";
    customer?: string;
    actions: "View" | "Print" | "Retrieve"; // Or more specific action buttons
}

const DUMMY_TRANSACTIONS: Transaction[] = [
    {
        id: "TRX12345",
        time: "10:15 AM",
        payment: "Cash",
        amount: 200.0,
        status: "Completed",
        customer: "Ahmed Khan",
    },
    {
        id: "TRX12344",
        time: "09:50 AM",
        payment: "Card",
        amount: 50.0,
        status: "Completed",
        customer: "Aisha",
    },
    {
        id: "TRX12343",
        time: "09:30 AM",
        payment: "Cash",
        amount: 100.0,
        status: "On Hold",
        customer: "Ali Hassan",
    },
];

const DayHistoryPage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>(
        new Date().toISOString().split("T")[0]
    );
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTransactions = DUMMY_TRANSACTIONS.filter((tx) => {
        // Add filtering logic based on date and search query
        return true; // Placeholder
    });

    const handleAction = (transactionId: string, action: string) => {
        alert(`Performing "${action}" for transaction ${transactionId}`);
        // Implement view, print, retrieve logic here
    };

    return (
        <div className="p-4">
            <div className="flex items-center space-x-4 mb-6">
                <input
                    type="date"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search by ID or Customer..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Transactions for {selectedDate}
                </h3>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Transaction ID
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Time
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Payment
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Amount
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredTransactions.map((tx) => (
                            <tr key={tx.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {tx.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {tx.time}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {tx.payment}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {tx.amount.toFixed(2)} DH
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {tx.status}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {tx.status === "On Hold" ? (
                                        <button
                                            className="text-blue-600 hover:text-blue-900 mr-2"
                                            onClick={() =>
                                                handleAction(tx.id, "Retrieve")
                                            }
                                        >
                                            Retrieve
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                className="text-indigo-600 hover:text-indigo-900 mr-2"
                                                onClick={() =>
                                                    handleAction(tx.id, "View")
                                                }
                                            >
                                                View
                                            </button>
                                            <button
                                                className="text-green-600 hover:text-green-900"
                                                onClick={() =>
                                                    handleAction(tx.id, "Print")
                                                }
                                            >
                                                Print
                                            </button>
                                        </>
                                    )}
                                    {/* Potentially add a Refund button for 'Completed' transactions */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DayHistoryPage;
