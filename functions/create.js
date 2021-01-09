const { createOddsAre } = require('../utils/airtable');

const headers = { 'Access-Control-Allow-Origin': '*' };

exports.handler = async (event) => {
  try {
    const response = await createOddsAre(event.body);
    console.log('response', response);
    if (response.statusCode === 200) {
      return {
        statusCode: 200,
        headers,
        // body: response,
      };
    }
    return {
      statusCode: 500,
      headers,
      body: `Non 200 status code from database: ${response.statusCode}`,
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: `Something went wrong: "${e}"`
    };
  }
};
