import React from 'react';

import 'babel/polyfill';
import Welcome from './lib/welcome/index.js';

const appElement = document.getElementById('app');

React.render(<Welcome message='Welcome to the Application'/>, appElement);