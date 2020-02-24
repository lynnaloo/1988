/* eslint-disable require-await */

module.exports.best = async (event, context) => {
  const html = `<html><body> +
    <iframe src="https://giphy.com/embed/FbPsiH5HTH1Di" width="480" height="445" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> +
    </body></html>`;

  return {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html'
    }
  };
};
