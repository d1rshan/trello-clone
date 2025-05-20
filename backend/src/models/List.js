import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    cards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Card"
        }
    ],
}, {timestamps: true})

export const List = mongoose.model("List",listSchema)