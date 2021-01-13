const request = require('./request');
const { AIRTABLE_API_KEY, TABLE_ID } = process.env;

const TABLE_NAME = 'challenges';
const API_ROOT = `https://api.airtable.com/v0/${TABLE_ID}/${TABLE_NAME}`;
const authHeader = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

async function getChallenge(challengeId) {
  return await request('get', `${API_ROOT}/${challengeId}`, authHeader);
}

async function createChallenge(description) {
  return request('post', API_ROOT, authHeader, { records: [{ fields: { description } }] });
}

async function updateChallenge(challenge) {
  return request('patch', API_ROOT, authHeader, { records: [challenge] });
}

module.exports = {
  createChallenge,
  getChallenge,
  updateChallenge,
};
