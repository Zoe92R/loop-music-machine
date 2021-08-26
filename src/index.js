import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import './assets/styles/main.scss';
import { App } from './App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
   </Provider>,
  document.getElementById('root')
);

reportWebVitals();
