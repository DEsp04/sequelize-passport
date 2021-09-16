//import the sequelize connection instance
const { sequelize, User } = require('../models')
const crypto = require('crypto');
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

//Instantiate the Passport LocalStrategy middleware:
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async (email, password, done) => {
    const user = await User.findOne(
      {
        where: {
          email: email
        }
      });
    if (user === null) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

//-----------------------Validator---------------------

//checks if password has > 8 chars
const isValidPassword = (password) => {
  if (password.length >= 8) {
    return true;
  }
  return false;
}

//uses a regex to check if email is valid
const isValidEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


//----------Controllers-----------


const createUser = async (req, res) => {
  

}

const getUserByID = async (req, res) => {
  
};

const updateUser = async (req, res) => {
  
};

const deleteUser = async (req, res) => {
 
};



module.exports = {
  createUser,
  getUserByID,
  updateUser,
  deleteUser
}