const userModel = require('../models/userModel')

//login callback
const { log } = require("console");

const loginController = async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await userModel.findOne({email, password})
        if(!user){
            return res.status(404).send('User Not Found')
        }
        res.status(200).json({
            success: true,
            user
        });
    }catch(error){
        res.status(400).json({
            success:false,
            error
        })
    }
};

//Register callback

const registerController = async(req, res) => {
    try{
        const newUser = new userModel(req.body);
        await newUser.save();({
            success: true,
            newUser,
        });
    }catch(error){
        res.status(400).json({
            success: false,
            error
        })
    }
};

module.exports = { registerController};
module.exports = { loginController };