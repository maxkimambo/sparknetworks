const express = require("express");
const router = express.Router();
const logger = require("../../utils/logger");

router.get("/", function(req, res) {
  // example of getting request context
  let ctx = req.app_context;

  logger.info("Requested root route", ctx);

  res.send({ title: "Express" });
});

module.exports = router;
