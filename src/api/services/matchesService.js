const data = require('../../../db/matches').matches;

const matchesService = function () {
    let filters;
    let currentUser;
    /** Helper  functions for filtering data */
    const hasPhoto = function (user) {
        if (filters.photo) {
            if (!user.main_photo || user.main_photo.length > 0) {
                return true;
            }
            return false;
        }
        return true;
    };
    const isFavourite = function (user) {
        if (filters.favourites) {
            return user.favourite;
        }
        return true;
    };

    const hasContacts = function (user) {
        if (filters.contacts) {
            return user.contacts_exchanged > 0;
        }
        return true;
    };
    const ageFilter = function (user) {
        return user.age >= filters.age.lower && user.age <= filters.age.upper;
    };

    const compatibilityFilter = function (user) {
        return user.compatibility_score >= filters.compatibility.lower / 100 &&
            user.compatibility_score <= filters.compatibility.upper / 100;
    };


    /** Calculates distance between two points
     *  Ref: http://snipplr.com/view/25479/calculate-distance-between-two-points-with-latitude-and-longitude-coordinates/
     */
    const distance = function (lat1, lon1, lat2, lon2) {
        const RADIUS = 6371; // earth radius
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const dist = RADIUS * c;
        return Math.round(dist * 1000); // distance in meters
    };

    const distanceFilter = function (user) {
        const currentDistance = distance(
            user.city.lat,
            user.city.lon,
            currentUser.city.lat,
            currentUser.city.lon,

        );
        const isWithinRange = currentDistance <= (filters.distance * 1000);

        return isWithinRange;
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

    const getMatches = function (_filters, _currentUser) {
        currentUser = _currentUser;
        const matches = filterData(_filters);
        return matches;
    };

    return {
        getMatches,
    };
};

module.exports = matchesService();
