//import the sequelize connection instance
const { sequelize, User } = require('../models');
const jwt = require("jsonwebtoken");

//--- In case we use .env file ---
require("dotenv").config();


const loginUser = async (req, res) => {
  //using email and password to verify the user exist on the database
  const { email, password } = req.body;
  
  //check if user has email in the database
  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  //if user's email doesnt match, then an error messg will be sent
  //you don't wanna give the specificity of what doesnt exist. Weather it is pw or email to make it more secure
  //Add a jwt secret to prevent hackers from getting into app's server 
  if (!userWithEmail) {
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });
  }

  //you don't wanna give the specificity of what doesnt exist. Weather it is pw or email to make it more secure
  if (userWithEmail.password !== password) {
    return res
    .status(400)
      .json({ message: "Email or password does not match!" });
  }

  //when jwt is sent out to the user's server, you can decode the token using 'HS26' on the header and in turn you will get the payload. You can store onthe payload user's email or id. Do not store password!!
  //sign method you can give it a payload and a secret and it will return to you valie jwt token
  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
  );

  res.json({ message: "Welcome Back!", token: jwtToken });
}





module.exports = {
  loginUser,
}