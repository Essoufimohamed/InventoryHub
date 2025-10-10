import { Trash2, Edit } from "lucide-react";

export default function CategoriesList({
    categories,
    loading,
    onDelete,
    onEdit,
}) {
    return (
        <div className="max-w-3xl mx-auto mt-6 p-6 border border-gray-300 rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-[#20607E] mb-4">
                Categories List :
            </h2>

            {loading ? (
                <p className="text-gray-500">Loading categories...</p>
            ) : categories.length === 0 ? (
                <p className="text-gray-500 text-center">
                    No categories found.
                </p>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {categories.map((cat) => (
                        <div
                            key={cat._id || cat.id}
                            className="relative flex flex-col items-center  border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition hover:scale-105 group"
                        >
                            {/* Action Icons */}
                            <div className="bg-[#00000055] w-full h-full absolute opacity-0 group-hover:opacity-100 transition flex justify-center items-center gap-2">
                                <button
                                    onClick={() => onEdit(cat)}
                                    className="p-1 rounded-md bg-blue-100 hover:bg-blue-200"
                                    title="Edit"
                                >
                                    <Edit size={16} className="text-blue-600" />
                                </button>
                                <button
                                    onClick={() => onDelete(cat._id)}
                                    className="p-1 rounded-md bg-red-100 hover:bg-red-200"
                                    title="Delete"
                                >
                                    <Trash2
                                        size={16}
                                        className="text-red-600"
                                    />
                                </button>
                            </div>
                            <div className="p-3 ">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-16 h-16 object-contain mb-2"
                                />
                                <span className="text-gray-700 font-medium text-center">
                                    {cat.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
