import express from "express";
import {
    addStock,
    getStockLogs,
    removeStock,
} from "../controllers/stockLogController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("add", authMiddleware, addStock);
router.post("remove", authMiddleware, removeStock);
router.get("logs", authMiddleware, getStockLogs);

export default router;
