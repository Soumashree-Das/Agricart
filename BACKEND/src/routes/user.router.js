import { Router } from 'express';
import {
    addUser,
    getUserDetails,
    getAllUsers,  // Import the new controller function
} from "../controllers/user.controller.js";

const router = Router();

router.post('/', addUser);
router.get('/:userId', getUserDetails);
router.get('/', getAllUsers);
export default router;
