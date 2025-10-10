import React from "react";

export default function SupplierTable({ suppliers, onDelete, onEdit }) {
    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
                <thead>
                    <tr className="bg-blue-100 text-gray-700 text-sm">
                        <th className="px-4 py-2 border border-gray-300 text-left">
                            Name
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-left">
                            Email
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-left">
                            Phone
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-left">
                            Address
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.length > 0 ? (
                        suppliers.map((supplier) => (
                            <tr key={supplier._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-300">
                                    {supplier.name}
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {supplier.email}
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {supplier.phone}
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {supplier.address}
                                </td>
                                <td className="px-4 py-2 border border-gray-300 text-center space-x-2">
                                    <button
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded-md"
                                        onClick={() => onEdit(supplier)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md"
                                        onClick={() => onDelete(supplier._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="5"
                                className="text-center text-gray-500 py-4 border border-gray-300"
                            >
                                No suppliers found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
