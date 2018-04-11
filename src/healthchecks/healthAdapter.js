const { HEALTH_STATUS_OK, HEALTH_STATUS_FAIL } = require('./status');

const health = async () => {
  const service = {};
  service.name = 'Api';

  try {
    // Add required health checks here.
    service.status = HEALTH_STATUS_OK;
    return service;
  } catch (err) {
    service.status = HEALTH_STATUS_FAIL;
    return service;
  }

  service.status = HEALTH_STATUS_OK;
  return service;
};
module.exports = { health };
