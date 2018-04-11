const { buildSchema } = require('graphql');

const matchSchema = buildSchema(' type Query { matches: String } ');

module.exports = matchSchema; 