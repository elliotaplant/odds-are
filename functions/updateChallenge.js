const respondWith = require('../utils/respondWith');
const { updateChallenge } = require('../utils/airtable');

exports.handler = async (event) => {
  try {
    console.log('event.body', event.body);
    const response = await updateChallenge(event.body);
    console.log('response', response);
    if (response.statusCode === 200) {
      return respondWith(200, JSON.stringify(response.body));
    }
    return respondWith(500, `Non 200 status code from database: ${response.statusCode}`);
  } catch (e) {
    return respondWith(500, `Something went wrong: "${e}"`);
  }
};
