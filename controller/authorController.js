require("dotenv").config();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

exports.author_login_post = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not working",
        user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.json({ err });
      }
      const token = jwt.sign(user, SECRET_KEY);
      return res.json({ token });
    });
  })(req, res, next);
};
