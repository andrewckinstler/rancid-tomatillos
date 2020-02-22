import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componenets/App/App.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
