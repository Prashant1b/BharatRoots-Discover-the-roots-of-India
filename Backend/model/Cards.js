import mongoose from "mongoose";

const Carddata = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    previewImage: String,
    fullImage: String
}, { timestamps: true });

const Card = mongoose.model("Iconic", Carddata); 


export default Card;