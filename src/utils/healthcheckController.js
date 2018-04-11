const healthCheckController = (clients) => {
  let results = [];

  let _clients = [];
  if (!clients) {
    Promise.reject(new Error('No health check clients passed'));
  }
  if (Array.isArray(clients)) {
    _clients = clients;
  } else {
    const clientsArray = [];
    clientsArray.push(clients);
    _clients = clientsArray;
  }

  results = _clients.map(client => client.health());

  return Promise.all(results);
};
module.exports = healthCheckController;
