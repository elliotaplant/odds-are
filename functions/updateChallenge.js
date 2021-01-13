const respondWith = require('../utils/respondWith');
const { updateChallenge } = require('../utils/airtable');

exports.handler = async (event) => {
  try {
    const response = await updateChallenge(JSON.parse(event.body));
    if (response.statusCode === 200) {
      return respondWith(200, response.body);
    }
    const error = `Non 200 status code from database: ${response.statusCode}`;
    console.error(error, response);
    return respondWith(500, { error });
  } catch (e) {
    console.error(e);
    return respondWith(500, { error: `Something went wrong: "${e}"` });
  }
};
