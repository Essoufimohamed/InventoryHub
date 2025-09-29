import Sale from "../models/Sale.js";
import Product from "../models/Product.js";
import StockLog from "../models/StockLog.js";

// @desc    Create a new sale
// @route   POST /api/sales
// @access  Cashier & Admin
export const createSale = async (req, res) => {
    const { items, paymentMethod } = req.body;

    try {
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            const product = await Product.findById(items[i].product);
            if (!product)
                return res.status(404).json({ message: "Product not found" });

            if (product.quantity < items[i].quantity) {
                return res
                    .status(400)
                    .json({ message: `Not enough stock for ${product.name}` });
            }

            product.quantity -= items[i].quantity;
            await product.save();

            total += items[i].quantity * product.price;

            // Log stock movement
            await StockLog.create({
                product: product._id,
                action: "remove",
                quantity: items[i].quantity,
                user: req.user._id,
            });
        }

        const sale = await Sale.create({
            cashier: req.user._id,
            items,
            total,
            paymentMethod,
        });

        res.status(201).json(sale);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all sales
// @route   GET /api/sales
// @access  Admin
export const getSales = async (req, res) => {
    try {
        const sales = await Sale.find().populate("cashier items.product");
        res.json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
