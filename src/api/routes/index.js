const logger = require("./../../utils/logger");
const root = require("./root");
const health = require("./health");
const users = require("./users");
const example = require("./example");

const setup = app => {
  // Register all route handlers here.
  logger.info("Registered root route");
  app.use("/", root);

  app.use("/example", example);
  logger.info("Registered example routes");

  app.use("/health", health);
  logger.info("Registered health routes");

  app.use("/users", users);
};

module.exports = { setup };
