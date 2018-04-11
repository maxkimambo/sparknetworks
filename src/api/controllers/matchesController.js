const log = require('./../../utils/logger');
// const validation = require('../validation');


const Controller = {
  matches: (req, res) => {
    // declare context of this request so that we can trace it in logs
    // add logs with varying levels e.g info, debug, warn, error
    const ctx = req.app_context;

    log.info('Matches route requested', ctx);

    res.send('Matches controller');
  },
};

module.exports = Controller;
