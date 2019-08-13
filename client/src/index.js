/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

import 'bpk-stylesheets';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(React.createElement(App), document.getElementById('root'));

/* Create fuctionality in a sensible file to od the following:
 * TODO - retrieve the results from the provided flight.json
 * TODO - a better format for displaying results to the results page.
 */
