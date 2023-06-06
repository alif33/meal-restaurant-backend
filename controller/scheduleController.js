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


exports.dropSchedule = async(req, res) => {
  
  const schedule = await Schedule.findByIdAndDelete({_id: req.query._id})

  if(schedule) {
    return res.status(201).json({
      success: true,
      message: 'Schedule deleted successfully'
    });
  }
};




