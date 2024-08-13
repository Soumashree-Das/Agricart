import mongoose, { isValidObjectId } from "mongoose";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Controller to add a new user
const addUser = asyncHandler(async (req, res) => {
    const { username, name, password, gender, address, pincode, email, phoneNumber } = req.body;

    const newUser = new User({
        username,
        name,
        password,
        gender,
        address,
        pincode,
        email,
        phoneNumber,
    });

    await newUser.save();
    res.status(201).json(new ApiResponse("User added successfully", newUser));
});

// Controller to get details of a specific user by ID
const getUserDetails = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    if (!isValidObjectId(userId)) {
        throw new ApiError("Invalid User ID", 400);
    }

    const user = await User.findById(userId);

    if (!user) {
        throw new ApiError("User not found", 404);
    }

    res.status(200).json(new ApiResponse("User details retrieved successfully", user));
});

// Controller to get all users
const getAllUsers = asyncHandler(async (req, res) => {
    const allUsers = await User.find();

    if (!allUsers || allUsers.length === 0) {
        throw new ApiError("No users found", 404);
    }

    res.status(200).json(new ApiResponse("All users retrieved successfully", allUsers));
});

export {
    addUser,
    getUserDetails,
    getAllUsers,
};
