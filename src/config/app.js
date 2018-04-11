// eslint-disable-next-line camelcase
const log_level = process.env.LOG_LEVEL || 'debug';
const serviceName = process.env.SERVICE_NAME || 'Service';
const env = process.env.NODE_ENV || 'development';

module.exports = { log_level, serviceName, env };
