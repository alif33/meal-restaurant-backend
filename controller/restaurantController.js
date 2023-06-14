const Resturant = require("../models/Restaurant");

exports.getRestaurants = async(req, res) => {
    const restaurants = await Resturant.find({});
    res.status(200).json(restaurants.reverse());
};

exports.addRestaurant = async(req, res) => {
    const {
        name,
        shopLogo,
        webHeaderImage,
        mobileHeaderImage
      } = req.body;
  
        const _restaurant = new Resturant({
         name,
         shopLogo,
         webHeaderImage,
         mobileHeaderImage
        });
        if (await _restaurant.save()) {
          res.send({
            success: true,
            message: "Restaurant added successfully",
          });
        }
};

exports.updateRestaurant = async(req, res) => {
    const { _id } = req.query;
    const {
      status,

      _address,
      city,
      state,
      zipCode,
      country,
      lat,
      long,
  
      ownerName,
      ownerPhone,
      ownerEmail,
      secCName,
      secCPhone,
      secCEmail,
      resturantPhone,
  
      gbmDomain,
      gbmWebsite,
      gbmStatus,
      gbmRole,
      gbmEmail,
      gbmOwner,
      mealDomain,
      password,
  
      accountManager,
      salesRep,
      menuRep,
  
      paymentType,
      emailStatement_,
      paymentFrequency,
      flatFee,
      trialEndDate,
      processingFee,
      contactMethod,
  
      minPickupOrder,
      minDeliveryOrder,
      pickupEstimate,
      deliveryEstimate,
      onlineDiscount,
      delivery,
      scheduledOrders,
      ordersToday,
  
      aboutUs
    } = req.body;
  
    const updates = {
      status,
      
      _address,
      city,
      state,
      zipCode,
      country,
      lat,
      long,
  
      ownerName,
      ownerPhone,
      ownerEmail,
      secCName,
      secCPhone,
      secCEmail,
      resturantPhone,
  
      gbmDomain,
      gbmWebsite,
      gbmStatus,
      gbmRole,
      gbmEmail,
      gbmOwner,
      mealDomain,
      password,
  
      accountManager,
      salesRep,
      menuRep,
  
      paymentType,
      emailStatement_,
      paymentFrequency,
      flatFee,
      trialEndDate,
      processingFee,
      contactMethod,
  
      minPickupOrder,
      minDeliveryOrder,
      pickupEstimate,
      deliveryEstimate,
      onlineDiscount,
      delivery,
      scheduledOrders,
      ordersToday,

      aboutUs
    };

    Resturant.findOneAndUpdate(
      { _id },
      { $set: updates },
      { returnOriginal: false },
      (err, restaurant) => {
        if (err) {
          return res.status(400).json({
            err,
            message: "Something went wrong",
          });
        }
  
        if (restaurant) {
          return res.status(201).json({
            success: true,
            restaurant,
            message: 'Updated'
          });
        }
      }
    );
};



// exports.removeAuthor = async(req, res) => {
//     const { _id }= req.query;
//     if(_id){
//         Author
//         .find({ _id })
//         .deleteOne(()=>{
//             res.send({
//                 success: true,
//                 message: 'Author deleted successfully'
//             });
//         });
//     }
// };
