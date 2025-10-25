import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
    {
        cashier: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
                qty: Number,
                price: Number,
            },
        ],
        total: Number,
        paymentMethod: {
            type: String,
            enum: ["cash", "card"],
            default: "cash",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Sale", saleSchema);
