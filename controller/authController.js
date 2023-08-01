const bcrypt = require("bcrypt");
const User = require("../models/User");
const Role = require("../models/Role");
const { generateJwtToken } = require("../utils");
const { sendMail } = require("../utils/Mailer");

exports.getUsers = async(req, res) => {
  try{
    const _users = await User.find({}).populate("team", { Role });
    const users = _users.reverse();
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
        const { _id, name, userName, email, phone, image } = user;
        const token = generateJwtToken(_id, email);

        res.status(200).json({
          success: true,
          message: "Well come",
          token,
          user: {
            _id,
            name,
            userName,
            email,
            phone,
            image
          }
        });
          
        } else {
          return res.status(400).json({ invalid: true,  message: "Invalid Credentials" });
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
            team,
            phone,
            image,
            status: status? "ACTIVE": "DISABLE"
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


exports.updateUser = async(req, res) => {
  const { _id } = req.query;
  const {
    name,
    userName,
    email,
    password,
    image,
    team,
    phone,
    status
  } = req.body;

  const updates = {
    userName,
    email,
    name,
    phone,
    status
  };

  if(image){
    updates.image = image
  }

  if(password){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    updates.password = hashedPassword
  }

  User.findOneAndUpdate(
      { _id }, 
      { $set: updates },
      { returnOriginal: false },
      (err, user)=>{
          if(err){
            return res.status(400).json({
                err,
                message: "Something went wrong",
            });
          }

          if(user){
              console.log(user);

              return res.status(201).json({
                  success: true,
                  message: "Updated"
              });

             
          }
      }
  )
}

exports.makePermissions = async(req, res) => {
  const { _id } = req.query;
  const { 
    status
  } = req.body;

  const updates = {};

  User.findOneAndUpdate(
      { _id }, 
      { $set: updates },
      { returnOriginal: false },
      (err, user)=>{
          if(err){
              return res.status(400).json({
                  err,
                  message: "Something went wrong",
              });
          }

          if(user){
              return res.status(201).json({
                  success: true,
                  message: `${status? "Enabled": "Disabled"}`
              });
          }
      }
  )
}

exports.deleteUsers = async(req, res) => {
  const { _id } = req.query;
  User.deleteOne({ _id }, (err, response) => {
    if (err) {
      return res.status(400).json({
        err,
        message: "Something went wrong",
      });
    }
    if (response.deletedCount === 1) {
      return res.send({
        success: true,
        message: "Deleted successfully",
      });
    }
  });
}








exports.forgetPasswrd = async(req, res) => {

  const { email } = req.body;
  const user = await User.findOne({ email });

  if(user){
      const token = generateJwtToken(user);
      const href = `${ process.env.APP_URI }/update-password/${ token }`
        await sendMail({
            from: process.env.SENDER_MAIL,
            to: email,
            subject: `Recovery your password`,
            text: 'test text',
            html: `<h1>Reset your password. <a href=${ href }>link</a></h1>`
        });

        return res.send({
            success: true,
            message: "Please check your Email",
        });
  }

  res.send({
    success: false,
    notfound: true,
    message: "Please register first."
  })
};

exports.updatePassword = async(req, res) => {
  const { _id } = req.user;
  const { password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const _password = await bcrypt.hash(password, salt);

  User.findOneAndUpdate(
    { _id }, 
    { $set: { password: _password } },
    { returnOriginal: false },
    (err, user)=>{
        if(err){
            return res.status(400).json({
                err,
                message: "Something went wrong",
            });
        }

        if(user){
          return res.send({
            success: true,
            message: "Password updated successfully",
          });
        }
    }
  )
};
