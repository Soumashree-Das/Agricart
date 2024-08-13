import mongoose, { isValidObjectId } from "mongoose";
import { Farmer } from "../models/farmer.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Controller to add a new farmer
const addFarmer = asyncHandler(async (req, res) => {
    const { username, name, password, gender, address, pincode, email, farmingCertifications, farmingDetails, phoneNumber } = req.body;

    const newFarmer = new Farmer({
        username,
        name,
        password,
        gender,
        address,
        pincode,
        email,
        farmingCertifications,
        farmingDetails,
        phoneNumber,
    });

    await newFarmer.save();
    res.status(201).json(new ApiResponse("Farmer added successfully", newFarmer));
});

// Controller to get details of a specific farmer by ID
const getFarmerDetails = asyncHandler(async (req, res) => {
    const { farmerId } = req.params;

    if (!isValidObjectId(farmerId)) {
        throw new ApiError("Invalid Farmer ID", 400);
    }

    const farmer = await Farmer.findById(farmerId);

    if (!farmer) {
        throw new ApiError("Farmer not found", 404);
    }

    res.status(200).json(new ApiResponse("Farmer details retrieved successfully", farmer));
});

// Controller to get all farmers
const getAllFarmers = asyncHandler(async (req, res) => {
    const allFarmers = await Farmer.find();

    if (!allFarmers || allFarmers.length === 0) {
        throw new ApiError("No farmers found", 404);
    }

    res.status(200).json(new ApiResponse("All farmers retrieved successfully", allFarmers));
});

export {
    addFarmer,
    getFarmerDetails,
    getAllFarmers,
};
