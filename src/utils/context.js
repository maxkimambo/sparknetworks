const uuidv4 = require("uuid/v4");

module.exports = function setContext(req, res, next) {
  const uid = uuidv4();
  let context = {
    id: uid
  };
  // Add context to the request
  req.app_context = Object.freeze(context);
  // add request id to the response as well
  res.setHeader("X-Request-Id", uid);
  next();
};
