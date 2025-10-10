// import { useState, useEffect } from "react";
// import AddSupplierForm from "../components/AddSupplierForm";
// import SupplierTable from "../components/SupplierTable";
// import SectionsTitle from "../components/SectionsTitle";
// import { Plus } from "lucide-react";
// import api from "../utils/api";
// import toast from "react-hot-toast";
// export default function DashboardSuppliers() {
//     const [suppliers, setSuppliers] = useState([]);
//     const [editingSupplier, setEditingSupplier] = useState(null);
//     const [open, setOpen] = useState(false);

//     {
//         // Load fake data (later replace with API fetch)
//     }
//     useEffect(() => {
//         const fetchSuppliers = async () => {
//             const { data } = await api.get("supplier");

//             setSuppliers(data);
//         };
//         fetchSuppliers();
//     }, []);

//     // Add supplier
//     const addSupplier = async (supplier) => {
//         try {
//             const { data } = await api.post("supplier", supplier);
//             setSuppliers((prev) => [...prev, data]);
//             setOpen(false);
//         } catch (err) {
//             toast.error("Failed to add supplier");
//         }
//     };
//     // Delete supplier
//     const deleteSupplier = async (id) => {
//         if (!confirm("Are you sure you want to delete this supplier?")) return;
//         try {
//             await api.delete(`/supplier/${id}`);
//             setSuppliers((prev) => prev.filter((s) => s._id !== id));
//             toast.success("Supplier deleted successfully!");
//         } catch (err) {
//             toast.error("Failed to delete supplier");
//         }
//     };

//     // Update supplier
//     const updateSupplier = async (updatedSupplier) => {
//         try {
//             const { data } = await api.put(
//                 `/supplier/${updatedSupplier._id}`,
//                 updatedSupplier
//             );
//             setSuppliers((prev) =>
//                 prev.map((s) => (s._id === data._id ? data : s))
//             );
//             setEditingSupplier(null);
//         } catch (err) {
//             toast.error("Failed to update supplier");
//         }
//     };

//     const onClose = () => {
//         setOpen(false);
//         setEditingSupplier(null);
//     };
//     return (
//         <>
//             <SectionsTitle title={"Suppliers"} />

//             <div className="p-6 space-y-6">
//                 <div className="flex justify-end">
//                     <button
//                         onClick={() => setOpen(true)}
//                         className="flex items-center gap-2 px-4 py-2 text-[#ffffdd] rounded-xl font-semibold  bg-gradient-to-tr from-blue-500 to-teal-500
//                   transition-all duration-300 ease-in-out
//                   hover:from-teal-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg "
//                     >
//                         <Plus size={18} />
//                         Add Supplier
//                     </button>
//                 </div>
//                 {open && (
//                     <AddSupplierForm
//                         onAdd={addSupplier}
//                         onUpdate={updateSupplier}
//                         editingSupplier={editingSupplier}
//                         onClose={onClose}
//                     />
//                 )}
//                 <SupplierTable
//                     suppliers={suppliers}
//                     onDelete={deleteSupplier}
//                     onEdit={(supplier) =>
//                         setEditingSupplier(supplier) || setOpen(true)
//                     }
//                 />
//             </div>
//         </>
//     );
// }

import { useState, useEffect } from "react";
import SupplierTable from "../components/SupplierTable";
import AddSupplierModal from "../components/AddSupplierForm";
import SectionsTitle from "../components/SectionsTitle";
import { Plus } from "lucide-react";
import api from "../utils/api";
import toast from "react-hot-toast";

export default function DashboardSuppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [editingSupplier, setEditingSupplier] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const { data } = await api.get("/supplier");
                setSuppliers(data);
            } catch (err) {
                toast.error("Failed to fetch suppliers");
            }
        };
        fetchSuppliers();
    }, []);

    // Add supplier
    const addSupplier = async (supplier) => {
        try {
            const { data } = await api.post("/supplier", supplier);
            setSuppliers((prev) => [...prev, data]);
            toast.success("Supplier added successfully!");
            setOpen(false);
            setEditingSupplier(null);
        } catch (err) {
            toast.error("Failed to add supplier");
        }
    };

    // Delete supplier
    const deleteSupplier = async (id) => {
        if (!confirm("Are you sure you want to delete this supplier?")) return;
        try {
            await api.delete(`/supplier/${id}`);
            setSuppliers((prev) => prev.filter((s) => s._id !== id));
            toast.success("Supplier deleted successfully!");
        } catch (err) {
            toast.error("Failed to delete supplier");
        }
    };

    // Update supplier
    const updateSupplier = async (updatedSupplier) => {
        try {
            const { data } = await api.put(
                `/supplier/${updatedSupplier._id}`,
                updatedSupplier
            );
            setSuppliers((prev) =>
                prev.map((s) => (s._id === data._id ? data : s))
            );
            toast.success("Supplier updated successfully!");
            setEditingSupplier(null);
            setOpen(false);
        } catch (err) {
            toast.error("Failed to update supplier");
        }
    };

    return (
        <>
            <SectionsTitle title="Suppliers" />

            <div className="p-6 space-y-6">
                <div className="flex justify-end">
                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-xl 
            bg-gradient-to-tr from-blue-500 to-teal-500 
            transition-all duration-300 ease-in-out 
            hover:from-teal-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg"
                    >
                        <Plus size={18} />
                        Add Supplier
                    </button>
                </div>

                <SupplierTable
                    suppliers={suppliers}
                    onDelete={deleteSupplier}
                    onEdit={(supplier) => {
                        setEditingSupplier(supplier);
                        setOpen(true);
                    }}
                />

                <AddSupplierModal
                    open={open}
                    onClose={() => {
                        setOpen(false);
                        setEditingSupplier(null);
                    }}
                    onAdd={addSupplier}
                    onUpdate={updateSupplier}
                    editingSupplier={editingSupplier}
                />
            </div>
        </>
    );
}
