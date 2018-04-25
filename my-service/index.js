'use strict';

exports.http = (req, res) => {
  console.log(req.query);
  res.status(200).send('Hello ' + req.query.name + "!");
};

const vision = require('@google-cloud/vision');
exports.vision = (req, res) => {

  // Check if uri was sent
  const uri = req.query.uri;
  if (uri == null) {
    res.status(400).json({ error: "Must include a 'uri' query parameter." });
  }

  const client = new vision.ImageAnnotatorClient();
  // Get labels
  client.labelDetection(uri)
    .then(
      (results) => {
        const labels = results[0].labelAnnotations;
        const labelsShort = labels.map(a => a.description);
        
        const resp = {
          image: uri,
          labelsShort
        };

        res.status(200).json(resp);
      }
    )
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    });
};