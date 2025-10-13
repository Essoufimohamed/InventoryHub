import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        sku: { type: String, unique: true },
        description: String,
        category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
        // category: String,
        // supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
        quantity: { type: Number, default: 0 },
        price: { type: Number, required: true },
        image: String,

        imageName: String,
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);
