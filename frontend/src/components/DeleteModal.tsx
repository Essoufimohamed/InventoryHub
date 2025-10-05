export default function DeleteModal({ onClose, onConfirm }) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Delete Product
                </h3>
                <p className="text-gray-600 mb-6">
                    Are you sure you want to delete ?
                    <br />
                    This action cannot be undone.
                </p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-gradient-to-tr from-red-500 to-rose-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
