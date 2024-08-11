
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


export {
    addStock,
    getStockDetails,
};

/*
import mongoose from "mongoose";
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


const getStockDetails = asyncHandler(async (req, res) => {
    const { product_Id } = req.params;

 
    const stock = await Product.findOne({ product_id: product_Id });

    if (!stock) {
        throw new ApiError("Stock item not found", 404);
    }

    res.status(200).json(new ApiResponse("Stock item retrieved successfully", stock));
});

export {
    addStock,
    getStockDetails,
};
*/