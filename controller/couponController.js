const Coupon = require("../models/Coupon");

exports.getCoupons = async(req, res) => {
    const { _rid } = req.query; 
    try{
      const coupons = await Coupon.find({_resturant: _rid });
      res.status(200).json(coupons.reverse());
    }catch(err){
      res.status(500).json({
          error: "Server side error"
      })
    }
};


exports.addCoupon = async(req, res) => {
    const { 
        name,
        description,
        _type,
        _discount,
        _condition } =
    req.body;
    const { _id } = req.query;
    const coupon = new Coupon({
        name,
        description,
        _type,
        _discount,
        _condition,
        _resturant: _id
    });
    if (await coupon.save()) {
        return res.send({
            success: true,
            message: "Coupon added successfully",
        });
    }
};

exports.updateCoupon = async(req, res) => {
    const { _id } = req.query;
    const { 
        name,
        description,
        _type,
        _discount,
        _condition 
    } = req.body;


  const updates = {
        name,
        description,
        _type,
        _discount,
        _condition 
    };

  Coupon.findOneAndUpdate(
    { _id },
    { $set: updates },
    { returnOriginal: false },
    (err, coupon) => {
      if (err) {
        return res.status(400).json({
          err,
          message: "Something went wrong",
        });
      }

      if (coupon) {
        return res.status(201).json({
          success: true,
          coupon,
          message: "Coupon updated successfully"
        });
      }
    }
  );
};

exports.deleteCoupon = async(req, res) => {
    const { _id } = req.query;
    if(await Coupon.findByIdAndDelete(_id)){
      return res.send({
          success: true,
          message: "Deleted successfully"
      })
    }
};