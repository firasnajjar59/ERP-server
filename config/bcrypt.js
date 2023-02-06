const bcrypt = require("bcryptjs");

const createHash = (password) => bcrypt.hash(password, 12);

const compareHash = (password, hash) => bcrypt.compare(password, hash);

module.exports = {
  createHash,
  compareHash,
};