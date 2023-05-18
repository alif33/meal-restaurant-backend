const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
          trim: true
        },
        description: {
          type: String,
          required: true,
          trim: true
        },
        _date: {
          type: String,
          required: true
        },
        date_: {
          type: String,
          required: true
        },
        deliveryMethod: {
          type: String,
          required: true
        },
        dayWeek: {
          type: String,
          required: true
        },
        startTime: {
          type: String,
          required: true
        },
        endTime: {
          type: String,
          required: true
        },
        resturant: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Restaurant",
          required: true
        },
        products:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }] 
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);