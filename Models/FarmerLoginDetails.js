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
        pincode: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        farmingCertifications: {
            type: String,
            default: null,
        },
        farmingDetails: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Farmer", FarmerSchema);
