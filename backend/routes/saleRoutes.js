import express from "express";
import { createSale, getSales } from "../controllers/saleController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createSale);
router.get("/", authMiddleware, getSales);
router.get("/my-sales", authMiddleware, getSales);

export default router;
