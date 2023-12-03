const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:{ 
        type: String,
        default:
            "C:\Users\DELL\Pictures\firefly.jpg",
        set: (v) => v === ""? "C:\Users\DELL\Pictures\firefly.jpg" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

