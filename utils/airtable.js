const request = require('./request');
const { AIRTABLE_API_KEY, TABLE_ID } = process.env;

const TABLE_NAME = 'challenges';
const API_ROOT = `https://api.airtable.com/v0/${TABLE_ID}/${TABLE_NAME}`;
const authHeader = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

async function getChallenge(challengeId) {
  const resp = await request('get', `${API_ROOT}?filterByFormula=id%3D${challengeId}`, authHeader);
  console.log('resp.body', resp.body);
  return resp.body;
}

async function createChallenge(challenge) {
  return request('post', API_ROOT, authHeader, { records: [{ fields: { challenge_description: challenge } }] });
}

// async function setOddsAndTarget(odds, target) {
//   return request('post', API_ROOT, authHeader, { records: [{ fields: { challenge } }] });
// }

module.exports = {
  createChallenge,
  getChallenge,
  // setOddsAndTarget,
  // setGuess,
};
