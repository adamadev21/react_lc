import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {configureStore} from './Features/ReduxConfiguration/ConfigureStore'
const store= configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
