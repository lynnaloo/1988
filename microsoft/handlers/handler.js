/* eslint-disable require-await */

module.exports.best = async function(context, req) {
  context.log('show the best of 1988');
  const html = `<html><body> +
    <h1>The Best of 1988</h1> +
    <iframe src="https://giphy.com/embed/FWi1f9Wn2hubC" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> +
    </body></html>`;

  context.res = {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html'
    }
  };
};
