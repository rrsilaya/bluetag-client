import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/custom/index';

import './index.css';
import App from './app/App';

import 'grommet-css/build/index.min.css';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
