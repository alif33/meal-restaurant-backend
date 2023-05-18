const DeliveryZone = require("../models/DeliveryZone");
const Photo = require("../models/Photo");

exports.getPhotos = async(req, res) => {
    const { _rid, type } = req.query;
    const photos = await Photo.find({ resturant: _rid, type });
    res.status(200).json(photos.reverse());
};

exports.addPhoto = async(req, res) => {
    const { resturant, type } = req.query;
    const {
      title,
      uri,
      status,
      tags
    } = req.body;

    const deliveryZone = new Photo({
        title,
        uri,
        status,
        tags,
        type,
        resturant
    });
    if (await deliveryZone.save()) {
      return res.send({
        success: true,
        message: `${ type==="PHOTO"? "Photo": "Banner" } added successfully`
      });
    }
};


exports.updatePhoto = async(req, res) => {
    const { _id } = req.query;
    const {
        title,
        uri,
        tags
    } = req.body;
  
    const updates = {
        title,
        uri,
        tags
    };
  
    Photo.findOneAndUpdate(
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
            message: "Photo updated sucessfully"
          });
        }
      }
    );
};


exports.dropPhoto = async(req, res) => {
    const { _id, type } = req.query;
    if (await Photo.findByIdAndDelete({_id})) {
      return res.status(201).json({
        success: true,
        message: `${ type==="PHOTO"? "Photo": "Banner" } deleted sucessfully`
      });
    }
};