import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import SamuraiJsApp from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <SamuraiJsApp/>,
  document.getElementById('root')
);
}


rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});


reportWebVitals();
