import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './main.scss';

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
