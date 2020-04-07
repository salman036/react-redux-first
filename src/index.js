import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Redux

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
