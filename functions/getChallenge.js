const respondWith = require('../utils/respondWith');
const { getChallenge } = require('../utils/airtable');

exports.handler = async (event) => {
  const challengeId = event.path.split('/').filter(Boolean).slice(-1);
  try {
    const response = await getChallenge(challengeId);
    if (response.statusCode === 200) {
      return respondWith(200, JSON.stringify(response.body.records[0]));
    }
    return respondWith(500, `Non 200 status code from database: ${response.statusCode}`);
  } catch (e) {
    return respondWith(500, `Something went wrong: "${e}"`);
  }
};
