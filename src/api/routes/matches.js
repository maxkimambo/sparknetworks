const express = require('express');

const router = express.Router();

const matchesController = require('../controllers/matchesController');

// please only add routes here
// business logic should be in controllers functions or their dependecies

/**
 * @api {get} /matches/ Request endpoint collection
 * @apiGroup Matches
 * @apiSuccess {String} Success message.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Matches data"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "MatchesNotFound"
 *     }
 */
router.get('/', matchesController.matches);


module.exports = router;
