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
    main_photo: 'https://randomuser.me/api/portraits/men/5.jpg',
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

  if (!Object.keys(req.query).length) return;
  const positiveParams = ['true', 'True', 'yes', 'Yes'];
  const filters = {
    photo: positiveParams.includes(photo),
    favourites: positiveParams.includes(favourites),
    contact: positiveParams.includes(contact),
    distance: parseInt(distance, 10),
    age: parseRange(age),
    compatibility: parseRange(compatibility),
    height: parseRange(height),
  };
  return filters;
};

/** Transforms data to match the UI  */
const transformData = function (_matches) {
  // replace pics with some real faces 
  const photoUrl = 'https://randomuser.me/api/portraits/women/';
  let counter = 1;
  const matches = _matches.map((m) => {
    counter += 1;
    return {
      displayName: m.display_name,
      age: m.age,
      compatibility: m.compatibility_score,
      contacts: m.contacts_exchanged,
      favourite: m.favourite,
      height: m.height_in_cm,
      jobTitle: m.jobTitle,
      photo: `${photoUrl}${counter}.jpg`,
      religion: m.religion,
      city: {
        name: m.city.name ? m.city.name : 'N/A',
        lon: m.city.lon ? m.city.lon : 0,
        lat: m.city.lat ? m.city.lat : 0,
      },
    };
  });
  return matches; 
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
    const transformedData = transformData(filteredData); 

    log.info('Matches route requested', ctx);

    res.send(transformedData);
  },
};

module.exports = Controller;