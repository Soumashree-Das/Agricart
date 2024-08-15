import mongoose, { isValidObjectId } from "mongoose";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res) => {
    //get user details from frontend 
    const { username, name, password, gender, address, pincode, email, phoneNumber,coverImage } = req.body;
    
    //check if user already exist - check user name and emai existence
    //cover image - if available upload to cloudinary
    //create user object - create entry in db
    //remove password and refresh token field
    //check for user creattion
    //return res
})

export {registerUser}

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
    // //validate user - if any field is empty
    // if(
    //     [name , username , password , email].some( (field) => {
    //     field?.trim === ""
    //     })
    // ){
    //     throw new ApiError(400,"all fields are required!")
    // }

    // //check if the user already exists
    // const existedUser = User.findOne({
    //     $or : [ { username } , { email }]
    // })
    // if(existedUser) {
    //     throw new ApiError(409 , "Username or email already exists")
    // }

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

// Controller to update a user by ID
const updateUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const updateData = req.body;

    if (!isValidObjectId(userId)) {
        throw new ApiError("Invalid User ID", 400);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true });

    if (!updatedUser) {
        throw new ApiError("User not found", 404);
    }

    res.status(200).json(new ApiResponse("User updated successfully", updatedUser));
});

// Controller to delete a user by ID
const deleteUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    if (!isValidObjectId(userId)) {
        throw new ApiError("Invalid User ID", 400);
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
        throw new ApiError("User not found", 404);
    }

    res.status(200).json(new ApiResponse("User deleted successfully", deletedUser));
});

export {
    addUser,
    getUserDetails,
    getAllUsers,
    updateUser,
    deleteUser,
};
