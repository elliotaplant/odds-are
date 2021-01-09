const { createOddsAre } = require('../utils/airtable');

const headers = { 'Access-Control-Allow-Origin': '*' };

exports.handler = async (event) => {
  try {
    const response = await createOddsAre(event.body);
    console.log('response.body.records', response.body.records);
    if (response.statusCode === 200) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(response.body.records[0]),
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
