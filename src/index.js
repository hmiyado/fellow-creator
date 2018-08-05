import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// disable react-dev-tools for this project
// https://github.com/facebook/react-devtools/issues/191#issuecomment-367905536
if (
  process.env.NODE_ENV === 'production' &&
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object'
) {
  for (let [key, value] of Object.entries(
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__
  )) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
      typeof value === 'function' ? () => {} : null;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
