//import the sequelize connection instance
//we're connectecing to the table which is in the passport_db 
const { sequelize, User } = require('../models');




const registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  //check if user is already registered
  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  //if user already exist return it 'already exist'
  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }

  //create a new user
  const newUser = new User({ first_name, last_name, email, password });
  
  //save user in the database
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

  //once user is registered, then send a messge "say resgistration success"
  if (savedUser) {
    res.json({ message: "Thanks for registering" })
  };


}


module.exports = {
  registerUser,
}