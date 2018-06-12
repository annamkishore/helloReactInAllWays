import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { Reducers } from 'react-redux-grid';

// Reducers
const helloWorldReducer = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case 'HELLO_WORLD':
      console.log('reducer: helloWorld')
      return Object.assign({}, state, { message: 'Hello, World!' })
    default:
      return state
  }
}

const helloReducer = combineReducers({
  helloWorld: helloWorldReducer,
  ...Reducers
})

let store = createStore(helloReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    );
registerServiceWorker();
