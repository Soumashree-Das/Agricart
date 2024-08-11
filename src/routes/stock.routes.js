
/*
import { Router } from 'express';
import {
    addStock,
    getStockDetails,
} from "../controllers/stock.controller.js"
//import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router();

//router.use(verifyJWT); 
router.route("/:productId")
    .get(getStockDetails)
    .post(addStock);


export default router;
*/

import { Router } from 'express';
import {
    addStock,
    getStockDetails,
} from "../controllers/stock.controller.js";

const router = Router();

// Routes to handle adding a new stock item and getting stock details by `product_id`
router.route("/:productId")
    .get(getStockDetails)
    .post(addStock);

export default router;
