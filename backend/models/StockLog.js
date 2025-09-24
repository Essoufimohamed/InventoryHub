import mongoose from "mongoose";

const stockLogSchema = new mongoose.Schema(
    {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        action: { type: String, enum: ["add", "remove"], required: true },
        quantity: Number,
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

export default mongoose.model("StockLog", stockLogSchema);
