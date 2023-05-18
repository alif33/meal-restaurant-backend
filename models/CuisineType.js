const mongoose = require("mongoose");

const cuisineTypeSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true
        },
        resturant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant',
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("CuisineType", cuisineTypeSchema);

