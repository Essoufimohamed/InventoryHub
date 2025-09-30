import express from "express";
import {
    createCategory,
    deleteCategory,
    getCategories,
    updateCategory,
} from "../controllers/categoryController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("", authMiddleware, createCategory);
router.get("", authMiddleware, getCategories);
router.put("/:id", authMiddleware, updateCategory);
router.delete("/:id", authMiddleware, deleteCategory);

export default router;
