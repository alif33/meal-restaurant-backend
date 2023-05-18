const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateJwtToken } = require("../utils");

exports.getUsers = async(req, res) => {
  try{
    const users = await User.find({});
    return res.status(200).json(users)
  }catch(err){
    return res.status(500).json({
        message: "Internal server error"
    })
 }
}


exports.signin = (req, res) => {
  const { email, password } = req.body
  User.findOne({ email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    
    if (user && bcrypt.compareSync(password, user.password)) {
      const { _id, email } = user;
      const token = generateJwtToken(_id, email);
      res.status(200).json({
        success: true,
            message: "Well come",
            token,
            email
          });
          
        } else {
          return res.status(400).json({ message: "Something went wrong" });
        }
      });
    };

exports.register = async(req, res) => { 
      const { 
        name,
        userName,
        email,
        password,
        image,
        type,
        team,
        phone,
        status
      } = req.body;

  try {
    User.findOne({ email }).exec(async (error, user) => {
      if (user) {
          return res.status(400).json({
              success: false,
              message: "Email already exists",
          });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const _user = new User({
            name,
            userName,
            email,
            password: hashedPassword,
            type,
            team,
            phone,
            image
        });

      _user.save( async(err, user) => {
        if (err) {
            return res.status(400).json({
                message: "Something went wrong",
                err
            });
        }

        if (user) {
          return res.status(201).json({
            success: true,
            message: "User added successfully",
          });
        }
      });
      }
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrongs",
      error
    });
  }
}
