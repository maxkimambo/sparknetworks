const healthCheck = require('./healthAdapter');

/** Combines all health check clients into an array to be passed to health check controller */
const healthChecks = () => {
  const checks = [];
  checks.push(healthCheck);
  return checks;
};
module.exports = healthChecks;
