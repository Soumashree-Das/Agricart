import mongoose, { isValidObjectId } from "mongoose";
import { Product } from "../models/stock.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Controller to add a new stock item
const addStock = asyncHandler(async (req, res) => {
    const { photo, Mrp, description, units, date_of_produce, growing_practices, place_of_origin, product_id, seller_name } = req.body;

    const newStock = new Product({
        photo,
        Mrp,
        description,
        units,
        date_of_produce,
        growing_practices,
        place_of_origin,
        product_id,
        seller_name,
    });

    await newStock.save();
    res.status(201).json(new ApiResponse("Stock item added successfully", newStock));
});

// Controller to get details of a specific stock item
const getStockDetails = asyncHandler(async (req, res) => {
    const { productId } = req.params;

    if (!isValidObjectId(productId)) {
        throw new ApiError("Invalid Product ID", 400);
    }

    const stock = await Product.findById(productId);

    if (!stock) {
        throw new ApiError("Stock item not found", 404);
    }

    res.status(200).json(new ApiResponse("Stock item retrieved successfully", stock));
});

// Controller to get all stock items
const getAllStock = asyncHandler(async (req, res) => {
    const allStock = await Product.find();

    if (!allStock || allStock.length === 0) {
        throw new ApiError("No stock items found", 404);
    }

    res.status(200).json(new ApiResponse("All stock items retrieved successfully", allStock));
});

// Controller to update a stock item
const updateStock = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const updateData = req.body;

    if (!isValidObjectId(productId)) {
        throw new ApiError("Invalid Product ID", 400);
    }

    const updatedStock = await Product.findByIdAndUpdate(productId, updateData, { new: true, runValidators: true });

    if (!updatedStock) {
        throw new ApiError("Stock item not found", 404);
    }

    res.status(200).json(new ApiResponse("Stock item updated successfully", updatedStock));
});

// Controller to delete a stock item
const deleteStock = asyncHandler(async (req, res) => {
    const { productId } = req.params;

    if (!isValidObjectId(productId)) {
        throw new ApiError("Invalid Product ID", 400);
    }

    const deletedStock = await Product.findByIdAndDelete(productId);

    if (!deletedStock) {
        throw new ApiError("Stock item not found", 404);
    }

    res.status(200).json(new ApiResponse("Stock item deleted successfully", deletedStock));
});

export {
    addStock,
    getStockDetails,
    getAllStock,
    updateStock,
    deleteStock,
};
