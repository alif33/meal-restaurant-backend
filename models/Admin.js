const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  { 
    name: { 
        type: String    
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);