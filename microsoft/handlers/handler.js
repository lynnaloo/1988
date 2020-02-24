/* eslint-disable require-await */

module.exports.best = async function(context, req) {
  context.log('show the best of 1988');
  const bestlink = 'https://gph.is/14qM7xM';
  const html = `<html><body><img src=${bestlink}></body></html>`;

  context.res = {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html'
    }
  };
};
