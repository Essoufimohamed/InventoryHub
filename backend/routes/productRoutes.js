import express from "express";
import {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct,
} from "../controllers/productController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createProduct);
router.get("/", getProducts);
router.delete("/:id", authMiddleware, deleteProduct);
router.put("/:id", authMiddleware, updateProduct);

export default router;
