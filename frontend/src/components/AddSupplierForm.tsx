// import { useState, useEffect } from "react";

// export default function AddSupplierForm({
//     onAdd,
//     onUpdate,
//     editingSupplier,
//     onClose,
// }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//     });

//     // Prefill form when editing
//     useEffect(() => {
//         if (editingSupplier) {
//             setFormData(editingSupplier);
//         } else {
//             setFormData({ name: "", email: "", phone: "", address: "" });
//         }
//     }, [editingSupplier]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (editingSupplier) {
//             onUpdate(formData);
//         } else {
//             // Generate ID for new supplier (later API will provide it)
//             onAdd(formData);
//             console.log(formData);
//         }
//         setFormData({ name: "", email: "", phone: "", address: "" });
//     };

//     return (
//         <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-5">
//             <h2 className="text-lg font-semibold text-[#20607E] mb-4">
//                 {editingSupplier ? "Edit Supplier :" : "Add New Supplier :"}
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Full Name */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                         Full Name :
//                     </label>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Full Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-1"
//                         required
//                     />
//                 </div>

//                 {/* Email */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                         Email :
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-1"
//                         required
//                     />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                         Phone :
//                     </label>
//                     <input
//                         type="text"
//                         name="phone"
//                         placeholder="Phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-1"
//                     />
//                 </div>

//                 {/* Address */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                         Address :
//                     </label>
//                     <input
//                         type="text"
//                         name="address"
//                         placeholder="Address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-1"
//                     />
//                 </div>

//                 {/* Button */}
//                 <div className="flex justify-end gap-3">
//                     <button
//                         type="button"
//                         onClick={onClose}
//                         className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-md shadow-sm"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         type="submit"
//                         className="bg-[#6BEEFF] hover:bg-cyan-200 text-gray-800 font-medium px-4 py-2 rounded-md shadow-sm"
//                     >
//                         {editingSupplier ? "Update Supplier" : "Add Supplier"}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AddSupplierForm({
    open,
    onClose,
    onAdd,
    onUpdate,
    editingSupplier,
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        if (editingSupplier) {
            setFormData(editingSupplier);
        } else {
            setFormData({ name: "", email: "", phone: "", address: "" });
        }
    }, [editingSupplier]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingSupplier) {
            onUpdate(formData);
        } else {
            onAdd(formData);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-[#00000054] bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md mx-4 rounded-xl shadow-lg relative p-6 animate-fade-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="bg-gray-200 p-1 rounded-full absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <X size={20} />
                </button>

                <h2 className="text-xl font-semibold text-[#20607E] mb-4">
                    {editingSupplier ? "Edit Supplier" : "Add New Supplier"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gradient-to-tr from-blue-500 to-teal-500 text-white rounded-md font-medium hover:scale-105 transition"
                        >
                            {editingSupplier
                                ? "Update Supplier"
                                : "Add Supplier"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
