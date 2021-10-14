const { sign, verify } = require("jsonwebtoken");
// const JWT = require("jsonwebtoken");
// JWT.sign()

//  Authentication Vs  Authorization

// Authentication : checking if it's the right user aka (correct username & correct password)
// Authorization : allowing the correct user to access

const createToken = (user) => {
  const accessToken = sign(
    { username: user.username, id: user._id },
    process.env.TOKEN_TEXT,
    {
      // in seconds 600s = 10 min
      expiresIn: 100,
    }
  );
  console.log(accessToken);
  return accessToken;
};

const checkToken = async (req, res, next) => {
  console.log(req.headers.authorization);
  // Bearer used for Auth2.0 which's a cryptic string
  // Take Bearer out
  const accessToken = req.headers.authorization.split(" ")[1];
  console.log(accessToken);
  if (accessToken == "null") {
    return res.json({ auth: false, message: "User NOT Authenticated!" });
  }
  try {
    const validToken = await verify(accessToken, process.env.TOKEN_TEXT);
    if (validToken) {
      // later as middleware
      // next();
      return res
        .status(200)
        .json({ auth: true, message: "User is Authenticated!" });
    } else {
      return res
        .status(404)
        .json({ auth: false, message: "You need to login!" });
    }
  } catch (err) {
    res.status(err.status).json({ auth: false, message: err.message });
  }
  next();
};

module.exports = { createToken, checkToken };
