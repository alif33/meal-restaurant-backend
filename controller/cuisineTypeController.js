const CuisineType = require("../models/CuisineType");

exports.getCuisineTypes = async(req, res) => {
    const { _id } = req.query;

    try{
       const cuisineTypes = await CuisineType.find({ resturant: _id });
       return res.status(200).json(cuisineTypes.reverse());
    }catch(err){
       return res.status(500).json({
           error: "Server side error"
       })
    }
};

exports.addCuisineType = async(req, res) => {
    const { _id } = req.query;
    const {
        type
    } = req.body;
  
  const cuisineTypes = new CuisineType({
    type,
    resturant: _id
  });
  if (await cuisineTypes.save()) {
    return res.send({
      success: true,
      message: "Cuisine Type added successfully",
    });
  }
}

exports.deleteCuisineType = async(req, res) => {
    const { _id } = req.query;
    if (await CuisineType.findByIdAndDelete({_id})) {
      return res.status(201).json({
        success: true,
        message: "Cuisine Type deleted successfully",
      });
    }
};