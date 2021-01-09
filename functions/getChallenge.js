const { getChallenge } = require('../utils/airtable');

const headers = { 'Access-Control-Allow-Origin': '*' };

function response(statusCode, body) {
  return { statusCode, headers, body };
}

exports.handler = async (event) => {
  const challengeId = event.path.split('/').filter(Boolean).slice(-1);
  try {
    const response = await getChallenge(challengeId);
    if (response.statusCode === 200) {
      return response(200, JSON.stringify(response.body.records[0]));
    }
    return response(500, `Non 200 status code from database: ${response.statusCode}`);
  } catch (e) {
    return response(500, `Something went wrong: "${e}"`);
  }
};
