import { useState, useEffect } from "react";

export default function AddSupplierForm({
    onAdd,
    onUpdate,
    editingSupplier,
    onClose,
}) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });

    // Prefill form when editing
    useEffect(() => {
        if (editingSupplier) {
            setFormData(editingSupplier);
        } else {
            setFormData({ fullName: "", email: "", phone: "", address: "" });
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
            // Generate ID for new supplier (later API will provide it)
            onAdd({ ...formData, id: Date.now() });
        }
        setFormData({ fullName: "", email: "", phone: "", address: "" });
    };

    return (
        <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-5">
            <h2 className="text-lg font-semibold text-[#20607E] mb-4">
                {editingSupplier ? "Edit Supplier :" : "Add New Supplier :"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Full Name :
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-1"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email :
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-1"
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Phone :
                    </label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-1"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Address :
                    </label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none py-1"
                    />
                </div>

                {/* Button */}
                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-md shadow-sm"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-[#6BEEFF] hover:bg-cyan-200 text-gray-800 font-medium px-4 py-2 rounded-md shadow-sm"
                    >
                        {editingSupplier ? "Update Supplier" : "Add Supplier"}
                    </button>
                </div>
            </form>
        </div>
    );
}
