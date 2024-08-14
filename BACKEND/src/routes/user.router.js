import { Router } from 'express';
import {
    addUser,
    getUserDetails,
    getAllUsers,
    updateUser,
    deleteUser  // Import the new controller function
} from "../controllers/user.controller.js";

const router = Router();

router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:userId', getUserDetails);
router.patch('/:userId', updateUser);
router.get('/:userId', deleteUser);
export default router;
