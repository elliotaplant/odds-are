const { updateChallenge } = require('../utils/airtable');

updateChallenge({
  id: 'recESK947CEBxFuFD',
  fields: {
    max: Math.floor(Math.random()* 10000),
    target: Math.floor(Math.random()* 10000),
  }
})
  .then(console.log)
  .catch(console.error);
