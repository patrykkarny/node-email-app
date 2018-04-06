import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import { App } from 'components/App';
import { reducers } from 'reducers';

import 'materialize-css/dist/css/materialize.min.css';

const store = createStore(
  reducers,
  {},
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(reduxThunk))
    : applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
