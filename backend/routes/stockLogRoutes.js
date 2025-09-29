import express from "express";
import {
    addStock,
    getStockLogs,
    removeStock,
} from "../controllers/stockLogController";

const router = express.Router();

router.post("add", addStock);
router.post("remove", removeStock);
router.get("logs", getStockLogs);

export default router;
