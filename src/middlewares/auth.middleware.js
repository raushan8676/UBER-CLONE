const usermodel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListToken.model');
const captainModel = require('../models/captain.model');

module.exports.authuser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({message:'No token provided'});
    }

    const blacklistedToken = await  blackListTokenModel.findOne({token:token});
    if(blacklistedToken){
        return res.status(401).json({message:'Unauthorized'});
    }

    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const user = await usermodel.findById(decode._id);

        req.user = user;
        next();
        
    }
    catch(err){
        return res.status(401).json({message:'Invalid token'});
    }
}

module.exports.authCaptain = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:'No token provided'});
    }

    const blacklistedToken = await  blackListTokenModel.findOne({token:token});
    if(blacklistedToken){
        return res.status(401).json({message:'Unauthorized'});
    }

    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decode._id);

        req.captain = captain;
        next();
        
    }
    catch(err){
        return res.status(401).json({message:'Invalid token'});
    }
}
