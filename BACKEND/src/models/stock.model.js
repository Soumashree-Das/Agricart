
import mongoose from 'mongoose';

const { Schema } = mongoose;

const stockSchema = new Schema({
    photo: {
        type: String,
        //required: true,
    },
    Mrp: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: " ",
    },
    units: {
        type: Number,
        required: true,
    },
    date_of_produce: {
        type: String,
        required: true,
    },
    growing_practices: {
        type: String,
        required: true,
    },
    place_of_origin: {
        type: String,
        required: true,
    },
    product_id: {
        type: String,
        required: true,
    },
    seller_name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export const Product = mongoose.model("Stock", stockSchema);
