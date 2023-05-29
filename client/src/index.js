import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { checkToken } from "./actions/authActions";

// Dispatch checkToken action to check for token on app initialization
store.dispatch(checkToken());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
