const { createChallenge } = require('../utils/airtable');
const respondWith = require('../utils/respondWith');

exports.handler = async (event) => {
  try {
    const response = await createChallenge(event.body);
    console.log('response.body.records', response.body.records);
    if (response.statusCode === 200) {
      return respondWith(200, JSON.stringify(response.body.records[0]));
    }
    return respondWith(500, `Non 200 status code from database: ${response.statusCode}`);
  } catch (e) {
    return respondWith(500, `Something went wrong: "${e}"`);
  }
};
