export default function HistoryTable({ logs }) {
    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                    <tr>
                        <th className="px-4 py-2 text-left">image</th>
                        <th className="px-4 py-2 text-left">Product</th>
                        <th className="px-4 py-2 text-left">Action</th>
                        <th className="px-4 py-2 text-left">Quantity</th>

                        <th className="px-4 py-2 text-left">Cashier</th>
                        <th className="px-4 py-2 text-left">Note</th>
                        <th className="px-4 py-2 text-left">Date</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {logs &&
                        logs.map((log) => (
                            <tr key={log._id}>
                                <td className="px-4 py-2">
                                    <img
                                        width={40}
                                        src={log.product?.image}
                                        alt={log.product?.name}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    {log.product?.name}
                                </td>
                                <td
                                    className={`px-4 py-2 font-semibold ${
                                        log.action === "add"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {log.action.toUpperCase()}
                                </td>
                                <td className="px-4 py-2">{log.quantity}</td>

                                <td className="px-4 py-2">{log.user?.name}</td>
                                <td className="px-4 py-2">{log.note || "-"}</td>
                                <td className="px-4 py-2 text-gray-500">
                                    {new Date(log.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {logs.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                    No stock logs available.
                </p>
            )}
        </div>
    );
}
