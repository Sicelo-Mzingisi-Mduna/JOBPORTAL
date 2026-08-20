const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate token
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '60d',
  });
};

// @desc Register new user
exports.register = async (req, res) => {
  try{
    const {name, email, password, avatar, role} = req.body;

    //Check if user exists
    const userExists = await User.findOne({email: email});

    if(userExists){
      return res.status(400).json({
        message: 'User already exists'
      });
    }


    //Create user
    const user = await User.create({
      name,
      email,
      password, //plain password – the pre‑save hook will hash it
      avatar,
      role
    });

    if(user){
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        token: generateToken(user._id),
        companyName: user.companyName || "",
        companyDescription: user.companyDescription || "",
        companyLogo: user.companyLogo || "",
        resume: user.resume
      });
    } else {
      res.status(400).json({
        message: 'Invalid user data'
      });
    }
  } catch(err){
    res.status(500).json({
      message: err.message
    })
  }
}

// @desc Login existing user
exports.login = async (req, res) => {
  try{

    const {email, password} = req.body;
    //Check for user email
    const user = await User.findOne({email: email});

    if(user && (await bcrypt.compare(password, user.password))){
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        token: generateToken(user._id),
        companyName: user.companyName || "",
        companyDescription: user.companyDescription || "",
        companyLogo: user.companyLogo || "",
        resume: user.resume || "",
      });
    } else {
      res.status(400).json({
        message: 'Invalid credentials'
      });
    }

  } catch(err){
    res.status(500).json({
      message: err.message
    })
  }
}

// @desc Get current(existing) user
exports.getMe = async (req, res) => {
  try{

    res.json(req.user);

  } catch(err){
    res.status(500).json({
      message: err.message
    })
  }
}
