// create user and manage user (base structure user information in register account and login account / accress a)
const UserModel = require("../Models/UserModel");

// 1. set bcrypt to to password before sending to database
// 2. set status code
//
// UserModel
exports.createUser = async (req, res) => {
  try {
    const {
      Name,
      Gender,
      Age,
      Nationality,
      Subscribe,
      Votes,
      Email,
      Password,
    } = req.body;

    const newUser = new UserModel({
      Name,
      Gender,
      Age,
      Nationality,
      Subscribe,
      Votes,
      Email,
      Password,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "User created", user: savedUser });
  } catch (err) {
    console.log(err);
    if (err.code && err.code === 11000) {
      // MongoDB duplicate key error
      res.status(409).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.infoUserByEmail = async (req, res) => {
  try {
    const UserData = req.body;
    const { Email } = UserData;
    const info = await UserModel.findOne({ Email: Email }).exec();
    res.status(200).json({ message: "User information", info });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.infoUserByID = async (req, res) => {
  try {
    const UserData = req.body;
    const { _id } = UserData;
    const info = await UserModel.findOne({ _id: _id }).exec();
    res.status(200).json({ message: "User information", info });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.allinfoUser = async (req, res) => {
  try {
    // const UserData = req.body;
    //   const { email } = UserData;
    const Data = await UserModel.find({}).exec();

    res.status(200).json({ message: "ALL user information", Data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.removeUserByEmail = async (req, res) => {
  try {
    const UserData = req.body;
    const { Email } = UserData;
    const info = await UserModel.findOneAndDelete({ Email: Email }).exec();
    res.status(200).json({ message: "User is removed", info });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.removeUserByID = async (req, res) => {
  try {
    const UserData = req.body;
    const { _id } = UserData;
    const info = await UserModel.findOneAndDelete({ _id: _id }).exec();
    res.status(200).json({ message: "User is removed", info });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};