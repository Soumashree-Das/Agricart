import { Router } from 'express';
import {
    addStock,
    getStockDetails,
    getAllStock,
    updateStock,
    deleteStock  // Import the new controller function
} from "../controllers/stock.controller.js";
import { upload } from "../middlewares/multer.middleware.js"

const router = Router();

// Route to get all stock items
router.route("/")
    .get(getAllStock)  // Add this line to fetch all stock items
    .post(
        upload.fields([
            {
                name : "photo" ,
                maxCount : 1
            }
        ]),
        addStock);   // Existing route to add a new stock item

// Route to get stock details by `productId`
router.route("/:productId")
    .get(getStockDetails)
    .patch(updateStock)
    .delete(deleteStock);

export default router;
