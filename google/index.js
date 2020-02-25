
exports.best = (request, response) => {
  const html = `<html><body>
    <h1>The Best of 1988</h1>
    <iframe src="https://giphy.com/embed/FbPsiH5HTH1Di" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </body></html>`;
  response.status(200).send(html);
};

exports.event = (event, callback) => {
  callback();
};
