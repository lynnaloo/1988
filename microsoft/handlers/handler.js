/* eslint-disable require-await */

module.exports.best = async function(context, req) {
  const html = `<html><body>
    <h1>This is the Best of 1988</h1>
    <iframe src="https://giphy.com/embed/olAik8MhYOB9K" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </body></html>`;

  context.res = {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html'
    }
  };
};
