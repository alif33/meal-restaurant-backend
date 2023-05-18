const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        requries: true,
        trim: true
      },
      image: {
        type: String
      },
      options: {
        type: Array
      },
      types: {
        type: Array
      },
      addons: {
        type: Array
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
      },
      resturant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
      }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);