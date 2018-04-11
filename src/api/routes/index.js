const logger = require('./../../utils/logger');
const root = require('./root');
const health = require('./health');
const users = require('./users');
const matches = require('./matches');

const setup = (app) => {
  // Register all route handlers here.
  logger.info('Registered root route');
  app.use('/', root);

  app.use('/matches', matches);
  logger.info('Registered example routes');

  app.use('/health', health);
  logger.info('Registered health routes');

  app.use('/users', users);
};

module.exports = { setup };
