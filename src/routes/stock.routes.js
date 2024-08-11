

import { Router } from 'express';
import {
    addStock,
    getStockDetails,
} from "../controllers/stock.controller.js";

const router = Router();

// Routes to handle adding a new stock item and getting stock details by `product_id`
router.route("/:productId")
    .get(getStockDetails)
router.route("/")
    .post(addStock);

export default router;
