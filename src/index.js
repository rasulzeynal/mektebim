import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {legacy_createStore as createStore} from 'redux';
import {Provider} from "react-redux";
import  {courseReducer} from "./redux/course/courseReducer"


const store = createStore(courseReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

