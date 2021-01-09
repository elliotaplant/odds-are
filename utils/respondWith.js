module.exports = function respondWith(statusCode, body) {
  return { statusCode, headers: { 'Access-Control-Allow-Origin': '*' }, body };
};
