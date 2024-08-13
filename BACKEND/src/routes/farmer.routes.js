import { Router } from 'express';
import {
    addFarmer,
    getFarmerDetails,
    getAllFarmers,
} from "../controllers/farmer.controller.js";

const router = Router();

router.post('/', addFarmer);
router.get('/:farmerId', getFarmerDetails);
router.get('/', getAllFarmers);

export default router;
