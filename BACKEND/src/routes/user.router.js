import { Router } from 'express';
import {
    registerUser,
    addUser,
    getUserDetails,
    getAllUsers,
    updateUser,
    deleteUser  // Import the new controller function
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser); //http://localhost:3026/api/v1/users/register 
//works perfectly for registered user.. is user is not present or any credential is wrong server access is denied

//router.route("/login").post(login); ////http://localhost:3026/api/v1/users/login

router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:userId', getUserDetails);
router.patch('/:userId', updateUser);
router.get('/:userId', deleteUser);


//exporting the router
export default router;
