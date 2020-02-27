/* eslint-disable require-await */

module.exports.best = async (event, context) => {
  const html = `<html><body>
    <h1>The Best of 1988</h1>
    <iframe src="https://giphy.com/embed/FWi1f9Wn2hubC" width="480" height="445" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </body></html>`;

  return {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html'
    }
  };
};
