const data = require('../../../db/matches').matches;

const matchesService = function () {
    let filters;
    let currentUser;
    /** Helper  functions for filtering data */
    const hasPhoto = function (user) {
        if (!user.main_photo || user.main_photo.length > 0) {
            return true;
        }
        return false;
    };
    const isFavourite = function (user) {
        return user.favourite;
    };

    const hasContacts = function (user) {
        return user.contacts_exchanged > 0;
    };
    const ageFilter = function (user) {
        return user.age >= filters.age.lower && user.age <= filters.age.upper;
    };

    const compatibilityFilter = function (user) {
        return user.compatibility_score >= filters.compatibility.lower / 100 &&
            user.compatibility_score <= filters.compatibility.upper / 100;
    };


    /** Calculates distance between two points
     *  Ref: https://www.geodatasource.com/developers/javascript
     */
    const distance = function (lat1, lon1, lat2, lon2, unit) {

        const radlat1 = (Math.PI * lat1) / 180;
        const radlat2 = (Math.PI * lat2) / 180;
        const theta = lon1 - lon2;
        const radtheta = (Math.PI * theta) / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === 'K') {
            dist *= 1.609344;
        }
        if (unit === 'N') {
            dist *= 0.8684;
        }
        return dist;
    };

    const distanceFilter = function (user) {
        const currentDistance = distance(
                                            user.city.lat, 
                                            user.city.lon, 
                                            currentUser.city.lat, 
                                            currentUser.city.lon,
                                        );
        return currentDistance >= filters.distance.lower
                 && currentDistance <= filters.distance.upper;
    };
    // end helper functions 

    const filterData = function (_filters) {
        filters = _filters;
        const filteredData = data.filter(hasPhoto)
                                    .filter(isFavourite)
                                    .filter(hasContacts)
                                    .filter(ageFilter)
                                    .filter(compatibilityFilter)
                                    .filter(distanceFilter);

        return filteredData;
    };

    const getMatches = function (_filters) {
        const matches = filterData(_filters);
        return matches;
    };

    return {
        getMatches,
    };
};

module.exports = matchesService();
