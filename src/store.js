import { createStore } from 'redux';
import fellow from './reducers';
export const store = createStore(
  fellow,
  process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
