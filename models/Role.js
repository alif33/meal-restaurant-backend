const mongoose = require("mongoose");
			
const roleSchema = new mongoose.Schema(
    {   
      name: {
        type: String,
        trim: true
      },
      dataEntry: {
        type: Boolean,
        default: true
      },       
      customerSupport: {
        type: Boolean,
        default: true
      },       
      accountManagement: {
        type: Boolean,
        default: true
      },       
      sales: {
        type: Boolean,
        default: true
      },       
      teamLeader: {
        type: Boolean,
        default: true
      },       
      manager: {
        type: Boolean,
        default: true
      },       
      financeTeam: {
        type: Boolean,
        default: true
      },       
      superAdmin: {
        type: Boolean,
        default: true
      },       
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", roleSchema);