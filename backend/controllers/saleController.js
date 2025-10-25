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
            const item = items[i];

            const product = await Product.findById(items[i]._id);
            console.log(product.name);
            console.log(item);

            if (!product)
                return res.status(404).json({ message: "Product not found" });

            if (product.quantity < items[i].qty) {
                return res
                    .status(400)
                    .json({ message: `Not enough stock for ${product.name}` });
            }

            product.quantity -= items[i].qty;
            await product.save();

            total += items[i].qty * product.price;

            // Log stock movement
            await StockLog.create({
                product: product._id,
                action: "remove",
                quantity: items[i].qty,
                user: req.user._id,
            });
        }

        const saleItems = items.map((item) => ({
            product: item._id,
            qty: item.qty,
            price: item.price,
        }));

        const sale = await Sale.create({
            cashier: req.user._id,
            items: saleItems,
            total,
            paymentMethod,
        });

        // const sale = await Sale.create({
        //     cashier: req.user._id,
        //     items,
        //     total,
        //     paymentMethod,
        // });

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

export const getSalesByCashier = async (req, res) => {
    try {
        // Ensure user is logged in
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Find all sales created by this cashier
        const sales = await Sale.find({ cashier: req.user._id })
            .populate("cashier", "name email")
            .populate("items.product", "name price")
            .sort({ createdAt: -1 });

        res.status(200).json(sales);
    } catch (error) {
        console.error(" Error fetching cashier sales:", error);
        res.status(500).json({ message: error.message });
    }
};
