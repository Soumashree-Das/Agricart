const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: Number,
            required: true,
            unique: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
        farmingDetails: {
            type: String,
            required: true,
        },
        farmingCertifications: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Farmer", FarmerSchema);
