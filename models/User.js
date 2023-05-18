const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    { 
        name: {
          type: String, 
          required: true
        },
        userName: { 
          type: String, 
          required: true 
        },
        password: { 
          type: String, 
          required: true 
        },
        email: { 
          type: String, 
          required: true, 
          unique: true 
        },
        type: {
          type: String,
          enum : ['Employee', 'Employee1'],
          default: 'Employee'
        },
        team: {
          type: String,
          enum : ['Customer', 'Support'],
          default: 'Support'
        },
        phone: {
          type: String, 
          // required: true
        },
        image: {
          type: String, 
          // required: true
        },
        role: {
          type: String,
          enum : ['ADMIN', "USER"],
          default: 'USER'
    
        },
        status: {
          type: String,
          enum : ['ACTIVE','DISABLE'],
          default: 'ACTIVE'
        }
    },
    {
    timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);