const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
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
    _type: {
        type: String,
        enum: ['FLAT', 'PERCENTAGE']
    },
    _discount: {
        type: Number,
        required: true,
        trim: true
    },
    _condition:{
        type: String,
        enum: ['SUBTOTAL', 'PRODUCT_TYPE'],
        required: false,

    },
    _resturant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);