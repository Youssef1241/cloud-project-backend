const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const UserModel = require("../models/User");

module.exports.createUser = async (userInfo) => {
  try {
    let hashedPassword = await bcrypt.hash(userInfo.password, 12);
    const newUser = new UserModel({
        username: userInfo.username,
        email: userInfo.email,
        password: hashedPassword,
        name: userInfo.name,
        userType: userInfo.userType,
    });
    await newUser.save();
    return newUser
  } catch (err) {
    throw new Error("Can Not Create New User, Please Try Again" + err);
  }
};

module.exports.doesUserExist = async (username) => {
  const existingUser = await UserModel.findOne({
    username: username,
  });

  if (existingUser) {
    return true;
  } else {
    return false;
  }
};

module.exports.checkUserInfo= async (username, password) => {
  try {
    const user = await UserModel.findOne({
        username: username,
    });
    let checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error("Username or Password is Not Correct, Please Try Again");
  }
};

module.exports.generateJWT = (user) => {
  const jwtPayload = {
    userId: user._id,
    username: user.username,
    userType: user.userType,
  };

  const jwtSecret = process.env.JWT_SECRET;

  try {
    let token = JWT.sign(jwtPayload, jwtSecret, { expiresIn: "1h" });
    return token;
  } catch (error) {
    throw new Error("Failure to sign in, please try again later.");
  }
};

module.exports.auth = async (token) => {
  try {
    const tokenPayload = await JWT.verify(token, process.env.JWT_SECRET);
    return tokenPayload;
  } catch (error) {
    throw new Error("Unauthrozied.");
  }
};