const request = require('./request');
const { AIRTABLE_API_KEY, PASTES_TABLE_ID } = process.env;

const API_ROOT = `https://api.airtable.com/v0/${PASTES_TABLE_ID}/Table%201`;
const authHeader = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

async function getOddsAre(challengeId) {
  const resp = await request(
    'get',
    `${API_ROOT}?filterByFormula=id%3D${challengeId}`,
    authHeader
  );
  return resp.body;
}

async function createOddsAre(challenge) {
  return request('post', API_ROOT, authHeader, { records: [{ fields: { challenge } }] });
}

// async function setOddsAndTarget(odds, target) {
//   return request('post', API_ROOT, authHeader, { records: [{ fields: { challenge } }] });
// }

module.exports = {
  createOddsAre,
  getOddsAre,
  setOddsAndTarget,
  // setGuess,
};
