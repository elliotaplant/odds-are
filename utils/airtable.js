const request = require('./request');
const { AIRTABLE_API_KEY, TABLE_ID } = process.env;

const TABLE_NAME = 'challenges';
const API_ROOT = `https://api.airtable.com/v0/${TABLE_ID}/${TABLE_NAME}`;
const authHeader = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

async function getChallenge(challengeId) {
  return await request('get', `${API_ROOT}/${challengeId}`, authHeader);
}

async function createChallenge(challenge) {
  return request('post', API_ROOT, authHeader, { records: [{ fields: { challenge_description: challenge } }] });
}

async function updateChallenge(challenge) {
  return request('post', API_ROOT, authHeader, { records: [{ fields: challenge }] });
}

module.exports = {
  createChallenge,
  getChallenge,
  updateChallenge,
};
