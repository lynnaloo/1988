/* eslint-disable require-await */

module.exports.best = async (event, context) => {
  const bestlink = 'https://gph.is/16bmBcs';
  const html = `<html><body><img src=${bestlink}></body></html>`;

  return {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html'
    }
  };
};
