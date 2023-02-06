const jwt = require("jsonwebtoken");

const generateJWTToken = (payload, expDate = "30d") => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expDate }, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });
};

module.exports = {
  generateJWTToken,
    verifyToken,
};
