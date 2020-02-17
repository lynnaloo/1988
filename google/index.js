
exports.best = (request, response) => {
  console.log('');
  response.status(200).send('');
};

exports.event = (event, callback) => {
  callback();
};
