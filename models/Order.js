const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  { 
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    phone: {
        type: String
    },
    orders: {
       type: Number,
       required: true
    },
    ordersPaid: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    balance: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['PAID', 'UNPAID'],
      default: 'UNPAID'
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);