import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
    try {
        const {
            name,
            sku,
            description,
            category,
            supplier,
            quantity,
            price,
            image,
        } = req.body;
        const product = await Product.create({
            name,
            sku,
            description,
            category,
            supplier,
            quantity,
            price,
            image,
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        // const products = await Product.find().populate("category supplier");
        const products = await Product.find().populate("category");
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!product)
            return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product)
            return res.status(404).json({ message: "Product not found" });
        res.json({ message: "Product removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
