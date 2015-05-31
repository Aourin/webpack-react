//Get React
import React from 'react';

//Polyfill and base welcome Component
import 'babel/polyfill';
import Welcome from 'lib/welcome';

//Import Base Style
import 'styles/app.scss';

//Grab the Application Element to build on
const appElement = document.getElementById('app');

//Render Default
React.render(
  <div>
    <Welcome message='Welcome to the Application'>
    </Welcome>
  </div>
  , appElement);