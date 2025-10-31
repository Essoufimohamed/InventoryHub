// export default function DeleteModal({ onClose, onConfirm }) {
//     return (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                     Delete Product
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                     Are you sure you want to delete ?
//                     <br />
//                     This action cannot be undone.
//                 </p>

//                 <div className="flex justify-center gap-4">
//                     <button
//                         onClick={onClose}
//                         className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={onConfirm}
//                         className="bg-gradient-to-tr from-red-500 to-rose-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
//                     >
//                         Delete
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { X, AlertTriangle, Trash2 } from "lucide-react"; // Import necessary icons

export default function DeleteModal({
    onClose,
    onConfirm,
    itemToDeleteName = "this item",
}) {
    return (
        <div className="fixed inset-0 bg-[#00000060] bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 sm:p-8 relative animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Icon and Title */}
                <div className="flex flex-col items-center text-center mb-6">
                    <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />{" "}
                    {/* Prominent warning icon */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Confirm Deletion
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Are you sure you want to delete{" "}
                        <span className="font-semibold text-gray-800">
                            "{itemToDeleteName}"
                        </span>
                        ?
                        <br />
                        This action cannot be undone.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 shadow-md"
                    >
                        <Trash2 className="w-5 h-5" /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
