const respondWith = require('../utils/respondWith');
const { getChallenge } = require('../utils/airtable');

exports.handler = async (event) => {
  const { challengeId } = event.queryStringParameters;
  try {
    const response = await getChallenge(challengeId);
    if (response.statusCode === 200) {
      return respondWith(200, JSON.stringify(response.body));
    }
    return respondWith(500, `Non 200 status code from database: ${response.statusCode}`);
  } catch (e) {
    return respondWith(500, `Something went wrong: "${e}"`);
  }
};
