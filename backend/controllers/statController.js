import Product from "../models/Product.js";
import Supplier from "../models/Supplier.js";
import Category from "../models/Category.js";

// router.get("/stats", async (req, res) => {
export const getStats = async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const lowStock = await Product.countDocuments({ stock: { $lt: 10 } });
        const suppliers = await Supplier.countDocuments();

        // Products per Category
        // const productsPerCategory = await Product.aggregate([
        //     { $group: { _id: "$category", count: { $sum: 1 } } },
        // ]);
        const productsPerCategory = await Product.aggregate([
            {
                $lookup: {
                    from: "categories", // name of the Category collection
                    localField: "category",
                    foreignField: "_id",
                    as: "categoryInfo",
                },
            },
            { $unwind: "$categoryInfo" },
            {
                $group: {
                    _id: {
                        id: "$categoryInfo._id",
                        name: "$categoryInfo.name",
                    },
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    _id: 0,
                    id: "$_id.id",
                    name: "$_id.name",
                    count: 1,
                },
            },
        ]);

        // Stock distribution (example)
        const stockDistribution = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    low: {
                        $sum: { $cond: [{ $lt: ["$quantity", 10] }, 1, 0] },
                    },
                    medium: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $gte: ["$quantity", 10] },
                                        { $lt: ["$quantity", 50] },
                                    ],
                                },
                                1,
                                0,
                            ],
                        },
                    },
                    high: {
                        $sum: { $cond: [{ $gte: ["$quantity", 50] }, 1, 0] },
                    },
                },
            },
        ]);

        res.json({
            totalProducts,
            lowStock,
            suppliers,
            productsPerCategory,
            stockDistribution: stockDistribution[0],
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
