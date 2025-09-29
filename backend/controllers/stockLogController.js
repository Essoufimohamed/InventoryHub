import StockLog from "../models/StockLog.js";
import Product from "../models/Product.js";

// @desc    Add stock (increase product quantity)
// @route   POST /api/stock/add
// @access  Admin & Cashier
export const addStock = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product)
            return res.status(404).json({ message: "Product not found" });

        product.quantity += quantity;
        await product.save();

        const log = await StockLog.create({
            product: product._id,
            action: "add",
            quantity,
            user: req.user._id,
        });

        res.status(201).json({ message: "Stock added", log });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Remove stock (decrease product quantity)
// @route   POST /api/stock/remove
// @access  Admin & Cashier
export const removeStock = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product)
            return res.status(404).json({ message: "Product not found" });

        if (product.quantity < quantity) {
            return res.status(400).json({ message: "Not enough stock" });
        }

        product.quantity -= quantity;
        await product.save();

        const log = await StockLog.create({
            product: product._id,
            action: "remove",
            quantity,
            user: req.user._id,
        });

        res.status(201).json({ message: "Stock removed", log });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all stock logs
// @route   GET /api/stock/logs
// @access  Admin
export const getStockLogs = async (req, res) => {
    try {
        const logs = await StockLog.find().populate("product user");
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
