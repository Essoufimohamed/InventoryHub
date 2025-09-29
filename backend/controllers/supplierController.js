import Supplier from "../models/Supplier.js";

// @desc    Create new supplier
// @route   POST /api/suppliers
// @access  Admin
export const createSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all suppliers
// @route   GET /api/suppliers
// @access  Admin & Cashier
export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update supplier
// @route   PUT /api/suppliers/:id
// @access  Admin
export const updateSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!supplier)
            return res.status(404).json({ message: "Supplier not found" });
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete supplier
// @route   DELETE /api/suppliers/:id
// @access  Admin
export const deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!supplier)
            return res.status(404).json({ message: "Supplier not found" });
        res.json({ message: "Supplier removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
