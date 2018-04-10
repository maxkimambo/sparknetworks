const appConfig = require("./app");

// Expose them via /config module
module.exports = Object.assign(
  {},
  appConfig
);
