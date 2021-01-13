const { createChallenge } = require('../utils/airtable');
const respondWith = require('../utils/respondWith');

exports.handler = async (event) => {
  try {
    const response = await createChallenge(event.body);
    if (response.statusCode === 200) {
      return respondWith(200, response.body.records[0]);
    }
    const error = `Non 200 status code from database: ${response.statusCode}`;
    console.error(error, response);
    return respondWith(500, { error });
  } catch (e) {
    console.error(e);
    return respondWith(500, { error: `Something went wrong: "${e}"` });
  }
};
