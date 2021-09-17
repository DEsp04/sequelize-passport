//authentication
const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const { sequelize, User } = require('../models');
require("dotenv").config();

//will receive jwt token and parse them to see if user is allow access to the server. 
//for strategy with are using passport-jwt 
//we are going to extract jwt password

//User can access the jwt in the local storage and then added it to the header. The header will go to the server, and the function below will check to see if the  wt is valid or not. This user will either have access or not. 

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, done) {
      return User.findOne({ where: { id: jwtPayload.id } })
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);