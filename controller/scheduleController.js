const Schedule = require("../models/Schedule");

exports.getSchedules = async(req, res) => {
    const { rid } = req.query;
    const schedules = await Schedule.find({ restaurant: rid });
    res.status(200).json(schedules.reverse());
};

exports.addSchedule = async(req, res) => {
    const { _rid } = req.query;
    const {
        docs
    } = req.body;

    try {
        const schedule = await Schedule.insertMany(docs)
        if(schedule){
            return res.status(201).json({
                success: true,
                message: "Schedule created sucessfully"
            });
        }
    } catch (error) {
        
    }

   
    // const schedule = new Schedule({
    //     day,
    //     genre,
    //     startPeriod,
    //     endPeriod,  
    //     resturant: _rid
    // });
    // if (await schedule.save()) {
    //   return res.send({
    //     success: true,
    //     message: "Schedule added successfully",
    //   });
    // }
};


exports.updateSchedule = async(req, res) => {
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
  
    Schedule.findOneAndUpdate(
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




