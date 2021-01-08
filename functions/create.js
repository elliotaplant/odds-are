const { createOddsAre } = require('../utils/airtable');

exports.handler = async (event) => {
  try {
    const response = await createOddsAre(event.body);
    console.log('response', response);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: 1,
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: `Something went wrong: "${e}"`
    };
  }
};
