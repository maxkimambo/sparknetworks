const express = require("express");
const router = express.Router();
const healthCheckClients = require("../../healthchecks")();
const healthCheckController = require("./../../utils/healthcheckController");

/**
 * @api {get} /health health
 * @apiDescription This is a standard health endpoint
 * @apiGroup Health
 * @apiSuccess (Health) {String} Successful health check
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": [
 *       {
 *        "name": "Name",
 *         "status": "Ok"
 *        }
 *        ]
 *    }
 *
 */
router.get("/", async function(req, res) {
  const results = await healthCheckController(healthCheckClients);
  res.send({
    status: results
  });
});
module.exports = router;
