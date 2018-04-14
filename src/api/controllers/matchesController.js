const log = require('./../../utils/logger');
// const validation = require('../validation');
const data = require('./../../../db/matches');

const parseRange = function (range) {
  const rangeItems = range.split('-');
  try {
    const lower = parseInt(rangeItems[0], 10);
    const upper = parseInt(rangeItems[1], 10);
    return {
      lower,
      upper,
    } 

  } catch (error) {
    log.error(`Couldnt parse range ${range}`);
  }
  return {
    lower: 0,
    upper: 0,
  }

}

const getFilters = function (req) {
  const {
    photo,
    favourites,
    contact,
    distance,
    age,
    compatibility,
    height,
  } = req.query;

  const filters = {
    photo: photo === 'yes',
    favourites: favourites === 'yes',
    contact: contact === 'yes',
    distance: parseInt(distance, 10),
    age: parseRange(age),
    compatibility: parseRange(compatibility),
    height: parseRange(height),
  };

  return filters;
}

const filterData = function (query) {
  console.log(query)
  return data;
}


const Controller = {
  matches: (req, res) => {
    // declare context of this request so that we can trace it in logs
    // add logs with varying levels e.g info, debug, warn, error
    const ctx = req.app_context;
    const filters = getFilters(req);
    const filteredData = filterData(filters);


    log.info('Matches route requested', ctx);

    res.send(filteredData);
  }
};

module.exports = Controller;