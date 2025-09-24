import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        contactPerson: { type: String },
        email: { type: String },
        phone: { type: String },
        address: { type: String },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    },
    { timestamps: true }
);

export default mongoose.model("Supplier", supplierSchema);
