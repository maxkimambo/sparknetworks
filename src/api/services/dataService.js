const data = require('../../../db/matches').matches;

const dataService = () => {
    /** Transforms data to match the UI  */
    const transform = function (_data) {
        // replace pics with some real faces 
        const photoUrl = 'https://randomuser.me/api/portraits/women/';
        let counter = 1;
        const matches = _data.map((m) => {
            counter += 1;
        
            return {
                displayName: m.display_name,
                age: parseInt(m.age),
                compatibility: Number.parseFloat(m.compatibility_score),
                contacts: parseInt(m.contacts_exchanged),
                favourite: m.favourite,
                height: parseInt(m.height_in_cm),
                jobTitle: m.job_title ? m.job_title : '-',
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

    const getData = function () {
         
        const transformedData = transform(data);
        // console.log(transformedData);
        return transformedData;
    };

    return {
        getData,
    };
};

module.exports = dataService();
