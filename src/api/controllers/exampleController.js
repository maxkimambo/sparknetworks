const log = require("./../../utils/logger");
const validation = require("../validation");


const Controller = {
  example: (req, res) => {
    // declare context of this request so that we can trace it in logs
    // add logs with varying levels e.g info, debug, warn, error
    let ctx = req.app_context;

    log.info("example route requested", ctx);

    res.send("Example controller");
  }
};

module.exports = Controller;
