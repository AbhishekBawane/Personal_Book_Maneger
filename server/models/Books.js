const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title:{
            type: String,
            required: true,
            trim: true
        },
        
        author: {
        type: String,
        required: true,
        trim: true
        },

        tags: {
            type: [String],
            default: []
        },

        status: {
            type: String,
            enum: ["Want to Read", "Reading", "Completed"],
            default : "Want To Read"
        }
    },

    {
        timestamps: true
    }

    
);

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;


