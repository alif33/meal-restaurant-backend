//genre
const mongoose = require("mongoose");
			
const scheduleSchema = new mongoose.Schema(
    {   
      day: {
        type: String,
        required: true
      },
      genre: {
        type: String,
        enum : ['Delivery', 'Pickup', 'Special Hour', 'Closure'],
        default: 'Support'
      },
      startPeriod: {
        type: String,
        required: true
      },       
      endPeriod: {
        type: String,
        required: true
      },
      restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
      }      
  },
  { timestamps: true }
);

module.exports = mongoose.model("Schedule", scheduleSchema);