const express = require("express");
const router = express.Router();

const exController = require("../controllers/exampleController");

// please only add routes here
// business logic should be in controllers functions or their dependecies

/**
 * @api {get} /example/ Request endpoint collection
 * @apiGroup Example
 * @apiSuccess {String} Success message.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Example controller"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ExampleNotFound"
 *     }
 */
router.get("/", exController.example);


module.exports = router;
