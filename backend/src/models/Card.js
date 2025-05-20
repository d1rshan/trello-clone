import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
},{timestamps: true})