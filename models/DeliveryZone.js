const mongoose = require("mongoose");

const DeliveryZoneSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
          time: true,
        },
        drivingRadius: {
          type: Number,
          required: true,
          time: true,
        },
        minimumOrder: {
          type: Number,
          required: true,
          time: true,
        },
        maximumOrder: {
          type: Number,
          required: true,
          time: true,
        },
        deliveryFee: {
          type: Number,
          required: true,
          time: true,
        },
        address: {
          type: String,
          required: true,
        },
        addMarker: {
          type: String,
          // required: true,
          time: true,
        },
        resturant: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Restaurant",
          required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("DeliveryZone", DeliveryZoneSchema);