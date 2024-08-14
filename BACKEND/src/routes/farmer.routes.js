import { Router } from 'express';
import {
    addFarmer,
    getFarmerDetails,
    getAllFarmers,
    updateFarmer,
    deleteFarmer
} from "../controllers/farmer.controller.js";

const router = Router();

router.post('/', addFarmer);
router.get('/', getAllFarmers);
router.get('/:farmerId', getFarmerDetails);
router.patch('/:farmerId', updateFarmer);
router.delete('/:farmerId', deleteFarmer);

export default router;
