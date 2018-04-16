const log = require('./../../utils/logger');

const matchesService = require('./../services/matchesService');

/** Mock function to return logged in user */
const getCurrentUser = function () {
  return {
    display_name: 'Max',
    age: 39,
    job_title: 'Doctor - Hospital',
    height_in_cm: 177,
    city: {
      name: 'Swindon',
      lat: 51.5541145,
      lon: -1.7976947,
    }, 
    main_photo: 'https://randomuser.me/api/portraits/men/40.jpg',
    compatibility_score: 0.89,
    contacts_exchanged: 2,
    favourite: false,
    religion: 'Christian',
  };
};

const parseRange = function (range) {
  const r = range || '';
  const rangeItems = r.split('-');
  try {
    const lower = parseInt(rangeItems[0], 10);
    const upper = parseInt(rangeItems[1], 10);
    return {
      lower,
      upper,
    };
  } catch (error) {
    log.error(`Couldnt parse range ${range}`);
  }
  return {
    lower: 0,
    upper: 0,
  };
};
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
};

const Controller = {
  matches: (req, res) => {
    // declare context of this request so that we can trace it in logs
    // add logs with varying levels e.g info, debug, warn, error
    const ctx = req.app_context;
    const filters = getFilters(req);
    log.debug(`Request: filters ${JSON.stringify(filters)}`, ctx);
    const currentUser = getCurrentUser(); 
    const filteredData = matchesService.getMatches(filters, currentUser);
   

    log.info('Matches route requested', ctx);

    res.send(filteredData);
  },
};

module.exports = Controller;