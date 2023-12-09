const axios = require('axios');

module.exports.geocodeAddress = async (address) => {
  const requestURL = '';

  try {
    const { data } = await axios.get(requestURL);

    if (data.summary.numResults < 1) {
      return null;
    }

    const locationCoordinates = data.results[0].position;
    return locationCoordinates;
  } catch (err) {
    console.log(err);
    throw new Error('Could not find a valid location using the given address.');
  }
};