/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

const fetch = require('node-fetch');
const querystring = require('querystring');

const config = require('./config');

const PRICING_URL = `${config.skyscannerApi}apiservices/pricing/v1.0`;
const POLL_DELAY = 1000;
const STATUS_CODES = {
  CREATED: 201,
  NOT_MODIFIED: 304,
};

const formatParams = params => querystring.stringify({
  country: 'UK',
  currency: 'GBP',
  locale: 'en-GB',
  locationSchema: 'Sky',
  apiKey: config.apiKey,
  ...params,
});

const createSession = async (params) => {
  console.log('Creating a session..');
  try {
    const response = await fetch(PRICING_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formatParams(params),
    });
    if (response.status !== STATUS_CODES.CREATED) {
      const json = await response.json();
      throw new Error(JSON.stringify(json));
    }
    console.log('Session created.');
    // Location header contains URL to poll for results.
    return response.headers.get('location');
  } catch (err) {
    throw err;
  }
};

let cache = {};

// Used to stop the API being hit too often.
const throttle = () => new Promise(resolve => setTimeout(resolve, POLL_DELAY));

const poll = async (location) => {
  await throttle();
  console.log('Polling results..');
  try {
    const response = await fetch(`${location}?apikey=${config.apiKey}`);
    if (response.status === STATUS_CODES.NOT_MODIFIED) {
      return cache;
    }
    const body = await response.json();
    cache = body;
    return body;
  } catch (err) {
    throw err;
  }
};

const getResults = async (location) => {
  try {
    const response = await poll(location);
    if (response.Status && response.Status === 'UpdatesComplete') {
      return response;
    }
    return await getResults(location);
  } catch (err) {
    throw err;
  }
};

const search = async (params) => {
  try {
    const locationToPoll = await createSession(params);
    return await getResults(locationToPoll);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  search,
};
