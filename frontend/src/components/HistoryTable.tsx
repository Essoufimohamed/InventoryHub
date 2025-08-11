export default function HistoryTable() {
    return (
        <>
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full border border-gray-200 text-sm text-left">
                    <thead className="bg-[#EBF5FB] ">
                        <tr>
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Action</th>
                            <th className="px-4 py-2">Qty</th>
                            <th className="px-4 py-2">Done by</th>
                            <th className="px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-4 py-2">product name</td>
                            <td className="px-4 py-2 font-bold text-[#53C486]">
                                Added
                            </td>
                            <td className="px-4 py-2">190</td>
                            <td className="px-4 py-2">Mohamed</td>
                            <td className="px-4 py-2">25/07/2025</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-4 py-2">product name</td>
                            <td className="px-4 py-2 font-bold text-[#C45353]">
                                Removed
                            </td>
                            <td className="px-4 py-2">20</td>
                            <td className="px-4 py-2">Yassir</td>
                            <td className="px-4 py-2">25/07/2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
