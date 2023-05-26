// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';

// // const rootElement = document.getElementById('root');
// // const root = ReactDOM.createRoot(rootElement);
// // root.render(<App />);

// // serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
// import store from './store';

// const rootElement = document.getElementById('root');

// ReactDOM.createRoot(rootElement).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
