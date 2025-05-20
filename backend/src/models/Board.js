import mongoose from "mongoose"

const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    lists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "List"
        }
    ]
},{timestamps: true})


export const Board = mongoose.model("Board",boardSchema)