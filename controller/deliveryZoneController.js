const DeliveryZone = require("../models/DeliveryZone");

exports.getDeliveryZones = async(req, res) => {
    const { _rid } = req.query;
    const deliveryZones = await DeliveryZone.find({ resturant: _rid });
    res.status(200).json(deliveryZones.reverse());
};

exports.addDeliveryZone = async(req, res) => {
    const { _rid } = req.query;
    const {
      name,
      drivingRadius,
      minimumOrder,
      maximumOrder,
      deliveryFee,
      address,
      addMarker,
    } = req.body;

    const deliveryZone = new DeliveryZone({
      name,
      drivingRadius,
      minimumOrder,
      maximumOrder,
      deliveryFee,
      address,
      addMarker,
      resturant: _rid
    });
    if (await deliveryZone.save()) {
      return res.send({
        success: true,
        message: "Delivery zone added successfully",
      });
    }
};


exports.updateDeliveryZone = async(req, res) => {
    const { _id } = req.query;
    const {
      name,
      drivingRadius,
      minimumOrder,
      maximumOrder,
      deliveryFee,
      address,
      addMarker
    } = req.body;
  
    const updates = {
      name,
      drivingRadius,
      minimumOrder,
      maximumOrder,
      deliveryFee,
      address,
      addMarker
    };
  
    DeliveryZone.findOneAndUpdate(
      { _id },
      { $set: updates },
      { returnOriginal: false },
      (err, dz) => {
        if (err) {
          return res.status(400).json({
            err,
            message: "Something went wrong",
          });
        }
  
        if (dz) {
          return res.status(201).json({
            success: true,
            message: "Delivery zone updated sucessfully"
          });
        }
      }
    );
};