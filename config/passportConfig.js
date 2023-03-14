const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Author = require("../models/author");
const bcrypt = require("bcryptjs");

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
            bcrypt.compare(user.password, password, (err, isMatch) => {
              if (err) {
                return done(err);
              }
              if (!isMatch) {
                return done(null, false, { message: "Wrong Password!" });
              }
              return done(null, user, { message: "Logged in Successfully" });
            });
          })
          .catch((err) => done(err));
      }
    )
  );
};

module.exports = initialize;
