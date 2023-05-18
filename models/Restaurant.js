const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },
      status: {
        type: String,
        enum: ["LIVE", "DISABLE"]
      },
      chain: {
        type: String,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      agreementDate: {
        type: String,
        trim: true
      },
      shopLogo: {
        type: String,
        default: ""
      },
      webHeaderImage: {
        type: String,
        default: ""
      },
      mobileHeaderImage: {
        type: String,
        default: ""
      },
  
      _address: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String
      },
      zipCode: {
        type: String
      },
      country: {
        type: String
      },
      lat: {
        type: String
      },
      long: {
        type: String
      },
  
      ownerName: {
        type: String
      },
      ownerPhone: {
        type: String
      },
      ownerEmail: {
        type: String
      },
      secCName: {
        type: String
      },
      secCPhone: {
        type: String
      },
      secCEmail: {
        type: String
      },
      resturantPhone: {
        type: String
      },
  
      gbmDomain: {
        type: String
      },
      gbmWebsite: {
        type: String
      },
      gbmStatus: {
        type: String
      },
      gbmRole: {
        type: String
      },
      gbmEmail: {
        type: String
      },
      gbmOwner: {
        type: String
      },
      mealDomain: {
        type: String
      },
      password: {
        type: String
      },
  
      accountManager: {
        type: String
      },
      salesRep: {
        type: String
      },
      menuRep: {
        type: String
      },
  
      paymentType: {
        type: String
      },
      emailStatement_: {
        type: String
      },
      paymentFrequency: {
        type: String
      },
      flatFee: {
        type: String
      },
      trialEndDate: {
        type: String
      },
      processingFee: {
        type: String
      },
      contactMethod: {
        type: String
      },
  
      minPickupOrder: {
        type: String
      },
      minDeliveryOrder: {
        type: String
      },
      pickupEstimate: {
        type: String
      },
      deliveryEstimate: {
        type: String
      },
      onlineDiscount: {
        type: String
      },
      delivery: {
        type: String
      },
      scheduledOrders: {
        type: String
      },
      ordersToday: {
        type: String
      },
  
      aboutUs: {
        type: String
      },
  
  
      landingPageImage: {
        type: String,
        // required: true,
        trim: true,
      },
      mobileBg: {
        type: String,
        // required: true,
        trim: true,
      },
      desktopBg: {
        type: String,
        // required: true,
        trim: true,
      },
      bannerText: {
        type: String,
        // required: true,
      },
  
      emailStatement: {
        type: String,
        // required: true,
      },
      // paymentFrequency: {
      //   type: String,
      //   enum: ["Weekly", "Biweekly", "Monthly"],
      //   // required: true,
      // },
      // flatFee: {
      //   type: Number,
      //   // reuired: true,
      //   trim: true,
      // },
      trialEnd: {
        type: String,
        // required: true,
        trim: true,
      },
      // processingFee: {
      //   type: String,
      //   // required: true,
      //   trim: true,
      // },
      // contactMethod: {
      //   type: String,
      //   enum: ["Phone", "Sms", "Email", "Tablet"],
      //   // reuired: true,
      // },
      gmbDomain: {
        type: String,
        // required: true,
      },
      ownWebsite: {
        type: String,
        // required: true,
      },
      priceRange: {
        type: String,
        // required: true,
        trim: true,
      },
  
      gmbStatus: {
        type: String,
        enum: ["Verified", "Not Verified", "Suspended"]
        // enum: ["Verified", "Not Verified", "Suspended"],
        // required: true,
      },
      gmbRole: {
        type: String,
        enum: ["Primary Owner", "Manager", "Owner", "Not Verified", "Suspended"],
        // required: true,
      },
      gmbEmail: {
        type: String,
        // required: true,
      },
      gmbPassword: {
        type: String,
        // required: true,
      },
      gmb_owner: {
        type: String,
        enum: ["Competitor", "Meal Now"],
        // required: true,
      },
  
      apple_map_email: {
        type: String,
        // required: true,
      },
      apple_map_pass: {
        type: String,
        // required: true,
      },
      apple_map_status: {
        type: String,
        enum: ["Verified", "Not Verified", "Suspended"],
        // required: true,
      },
      apple_map_owner: {
        type: String,
        enum: ["Competitor", "Meal Now"],
        // required: true,
      },
      owners_email: {
        type: String,
        // required: true,
      },
      owners_phone: {
        type: String,
        // required: true,
      },
      owners_name: {
        type: String,
        // required: true,
      },
      se_contact_name: {
        type: String,
        // reuired: true,
      },
      se_contact_phone: {
        type: String,
        // required: true,
        default: "",
      },
      se_contact_email: {
        type: String,
        // required: true,
      },
      res_phone: {
        type: String,
        // required: true,
      },
  
      minimum_pickUp_order: {
        type: Number,
        // required: true,
      },
  
      pickUp_estimate: {
        type: String,
        // required: true,
      },
      delivery_estimate: {
        type: String,
        // required: true,
      },
      online_discount: {
        type: Number,
        // required: true,
      },
      pause_delivery_today: {
        type: String,
        // required: true,
        enum: ["active", "inactive"],
        default: "inactive",
      },
      no_scheduled_order: {
        type: String,
        // required: true,
        enum: ["active", "inactive"],
        default: "inactive",
      },
    },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);