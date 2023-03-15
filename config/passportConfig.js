require("dotenv").config();
const LocalStrategy = require("passport-local").Strategy;
const Author = require("../models/author");
const bcrypt = require("bcryptjs");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const initialize = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        return Author.findOne({ username: email })
          .then((user) => {
            if (!user) {
              return done(null, false, { message: "User not found" });
            }
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) {
                return done(err);
              }
              if (!isMatch) {
                console.log("I am here");
                return done(null, false, { message: "Wrong Password!" });
              }
              return done(null, user, { message: "Logged in Successfully" });
            });
          })
          .catch((err) => done(err));
      }
    )
  );

  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
        secretOrKey: process.env.SECRET_KEY,
      },
      (jwtPayload, done) => {
        return Author.findById(jwtPayload.id)
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => done);
      }
    )
  );
};

module.exports = initialize;
