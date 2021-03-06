const uuidv4 = require('uuid/v4');

function setContext(req, res, next) {
  const uid = uuidv4();
  const context = {
    id: uid,
  };
  // Add context to the request
  req.app_context = Object.freeze(context);
  // add request id to the response as well
  res.setHeader('X-Request-Id', uid);
  next();
}

module.exports = setContext;
