const winston = require("winston");
const config = require("../config");
const os = require("os");

const LOG_LEVELS = ['info', 'debug', 'warn', 'error'];

const log = function() {
  const hostname = os.hostname();
  const timeStampFormat = () => new Date().toLocaleTimeString();
  const logger = winston.createLogger({
    level: config.log_level,
    format: winston.format.json(),
    transports: [
      new winston.transports.Console({
        timestamp: timeStampFormat,
        colorize: true
      })
    ],
    exitOnError: false
  });

  const log = {};

  LOG_LEVELS.forEach(level => {
    log[level] = log[level.toUpperCase()] = (message, ctx) => {
      logger.log(
        level,
        `${hostname}-${config.serviceName} - [ ${ctx ? ctx.id : "System"} ] - ${
          message
        }`
      );
    };
  });

  return log;
};

module.exports = log();
