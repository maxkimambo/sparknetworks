const express = require('express');

const router = express.Router();

// const matchesController = require('../controllers/matchesController');

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
const graphQlHttp = require('express-graphql');
const data = require('../../../db/matches');
const {
    buildSchema
} = require('graphql');

const rootData = {
    matches: () => {
        return JSON.stringify(data);
    },
};

const graphSchema = buildSchema(' type Query { matches: String } ');

// app.use('/graphql', graphQlHttp({
//     schema: graphSchema,
//     rootValue: rootData,
//     graphiql: true,
// }));


router.use('/query', graphQlHttp({
    schema: graphSchema,
    rootValue: rootData,
    graphiql: true,
}));


module.exports = router;