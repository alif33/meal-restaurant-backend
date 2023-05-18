const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          trim: true
        },
        uri: {
          type: String,
          required: true
        },
        type: {
           type: String,
           enum: ["PHOTO", "BANNER"] 
        },
        tags: {
          type: Array
        },
        status: {
           type: String,
           enum: ["ACTIVE", "DEACTIVE"] 
        },
        resturant: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Restaurant",
          required: true
        } 
    },
    { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);