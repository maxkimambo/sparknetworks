const healthCheckController = (clients) => {
  let results = [];

  let clientAdapters = [];
  if (!clients) {
    Promise.reject(new Error('No health check clients passed'));
  }
  if (Array.isArray(clients)) {
    clientAdapters = clients;
  } else {
    const clientsArray = [];
    clientsArray.push(clients);
    clientAdapters = clientsArray;
  }

  results = clientAdapters.map(client => client.health());

  return Promise.all(results);
};
module.exports = healthCheckController;
