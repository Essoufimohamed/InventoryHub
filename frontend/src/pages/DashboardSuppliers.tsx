import { useState, useEffect } from "react";
import AddSupplierForm from "../components/AddSupplierForm";
import SupplierTable from "../components/SupplierTable";
import SectionsTitle from "../components/SectionsTitle";
import { Plus } from "lucide-react";
export default function DashboardSuppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [editingSupplier, setEditingSupplier] = useState(null);
    const [open, setOpen] = useState(false);

    {
        // Load fake data (later replace with API fetch)
    }
    useEffect(() => {
        const fakeData = [
            {
                id: 1,
                fullName: "John Doe",
                email: "john.doe@example.com",
                phone: "+1 555-123-4567",
                address: "123 Main St, New York, USA",
            },
            {
                id: 2,
                fullName: "Fatima Zahra",
                email: "fatima.zahra@email.com",
                phone: "+212 600-123456",
                address: "Casablanca, Morocco",
            },
        ];
        setSuppliers(fakeData);
    }, []);

    // Add supplier
    const addSupplier = (supplier) => {
        setSuppliers([...suppliers, supplier]);
        setOpen(false);
    };

    // Delete supplier
    const deleteSupplier = (id) => {
        setSuppliers(suppliers.filter((s) => s.id !== id));
    };

    // Edit supplier
    const editSupplier = (supplier) => {
        setEditingSupplier(supplier);
    };

    // Update supplier
    const updateSupplier = (updatedSupplier) => {
        const updatedList = suppliers.map((s) =>
            s.id === updatedSupplier.id ? updatedSupplier : s
        );
        setSuppliers(updatedList);
        setEditingSupplier(null);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <SectionsTitle title={"Suppliers"} />

            <div className="p-6 space-y-6">
                <div className="flex justify-end">
                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 text-[#ffffdd] rounded-xl font-semibold  bg-gradient-to-tr from-blue-500 to-teal-500 
                  transition-all duration-300 ease-in-out 
                  hover:from-teal-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg "
                    >
                        <Plus size={18} />
                        Add Supplier
                    </button>
                </div>
                {open && (
                    <AddSupplierForm
                        onAdd={addSupplier}
                        onUpdate={updateSupplier}
                        editingSupplier={editingSupplier}
                        onClose={onClose}
                    />
                )}
                <SupplierTable
                    suppliers={suppliers}
                    onDelete={deleteSupplier}
                    onEdit={editSupplier}
                />
            </div>
        </>
    );
}
