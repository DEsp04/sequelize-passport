//import the sequelize connection instance
const { sequelize, User } = require('../models');




const registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  console.log(req.body)

  // const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
  //   (err) => {
  //     console.log("Error: ", err);
  //   }
  // );

  // if (alreadyExistsUser) {
  //   return res.status(409).json({ message: "User with email already exists!" });
  // }

  // const newUser = new User({ first_name, last_name, email, password });
  
  // const savedUser = await newUser.save().catch((err) => {
  //   console.log("Error: ", err);
  //   res.status(500).json({ error: "Cannot register user at the moment!" });
  // });

  // if (savedUser) {
  //   res.json({ message: "Thanks for registering" })
  // };


}


module.exports = {
  registerUser,
}