import { Router } from 'express';
import {
    addStock,
    getStockDetails,
    getAllStock,
    updateStock,
    deleteStock  // Import the new controller function
} from "../controllers/stock.controller.js";

const router = Router();

// Route to get all stock items
router.route("/")
    .get(getAllStock)  // Add this line to fetch all stock items
    .post(addStock);   // Existing route to add a new stock item

// Route to get stock details by `productId`
router.route("/:productId")
    .get(getStockDetails)
    .patch(updateStock)
    .delete(deleteStock);

export default router;