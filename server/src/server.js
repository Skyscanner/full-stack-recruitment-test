/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/**
  Simple flight search endpoint.
*/
app.get('/api/search', async (req, res) => {
  try {
    // TODO - retrieve the results from the provided flight-results.json

    // TODO - a better format for displaying results to the client
    console.log('TODO: transform results for consumption by client');

    // TODO - Return the results to the client below
    res.json();
  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
