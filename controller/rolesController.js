const Role = require("../models/Role");

exports.getRoles = async(req, res)=>{
    const roles = await Role.find({});
    res.status(200).json(roles);
}

exports.addRoles = async(req, res) => {
    const { name } = req.body

    const _role = new Role({
        name,
    });

    _role.save( async(err, role) => {
        if(err){
            return res.status(400).json({
                message: "Something went wrong",
                err
            });
        }

        if (role) {
            return res.status(201).json({
                success: true,
                message: "Role added successfully",
            });
        }
  });

};

exports.updatePermissions = async(req, res) => {

    const { _id, status } = req.query
    const updates = { ...req.body };

    Role.findOneAndUpdate(
    { _id },
    { $set: updates },
    { returnOriginal: false },
        (err, role) => {
            if (err) {
                return res.status(400).json({
                    err,
                    message: "Something went wrong",
                });
            }

            if (role) {
                return res.status(201).json({
                    success: true,
                    status,
                    message: `${status==="true"? "Allowed": "Disallowed"}`
                });
            }
        }
    );
  
};