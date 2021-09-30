const { sign, verify } = require("jsonwebtoken");
// const JWT = require("jsonwebtoken");
// JWT.sign()

const createToken = (user) => {
  const accessToken = sign(
    { username: user.username, id: user._id },
    process.env.TOKEN_TEXT
  );

  return accessToken;
};
const checkToken = async (req, res, next) => {
  // Something to check later
  const accessToken = req.headers["x-access-token"];
  if (!accessToken) {
    return res.status(400).json({ auth: false, message: "User NOT Authen!" });
  }
  try {
    const validToken = await verify(accessToken, process.env.TOKEN_TEXT);
    if (validToken) {
      // later as middleware
      //
      return res.status(200).json({ auth: true, message: "User is Authen!" });
    } else {
      return res
        .status(404)
        .json({ auth: true, message: "You need to login!" });
    }
  } catch (err) {
    res.status(err.status).json({ auth: true, message: err.message });
  }
  next();
};

module.exports = { createToken, checkToken };
