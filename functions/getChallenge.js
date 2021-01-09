const { getChallenge } = require('../utils/airtable');

const headers = { 'Access-Control-Allow-Origin': '*' };

function response(statusCode, body) {
  return { statusCode, headers, body };
}

exports.handler = async (event) => {
  let challengeId;
  try {
    const requestBody = JSON.parse(event.body);
    if (!requestBody.challengeId) {
      return response(400, 'No challengeId provided');
    }
    challengeId = requestBody.challengeId;
  } catch (e) {
    return response(400, 'Non json body provided');
  }
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
