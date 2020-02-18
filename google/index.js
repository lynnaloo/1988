
exports.best = (request, response) => {
  console.log('show the best of 1988');
  response.status(200).send('');
};

exports.event = (event, callback) => {
  callback();
};
