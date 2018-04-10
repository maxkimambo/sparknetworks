let log_level = process.env.LOG_LEVEL || "debug";
let serviceName = process.env.SERVICE_NAME || "Service";
let env = process.env.NODE_ENV || "development";

module.exports = { log_level, serviceName, env };
