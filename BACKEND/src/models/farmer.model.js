import mongoose from 'mongoose';

const { Schema } = mongoose;

const farmerSchema = new Schema({
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
}, {
    timestamps: true
});


export const Farmer = mongoose.model("Farmer", farmerSchema);