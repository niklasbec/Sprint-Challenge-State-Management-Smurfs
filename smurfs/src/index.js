import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import * as reducers from './state/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const mainReducer = combineReducers({
    smurfData: reducers.smurfReducer,
    // formData: reducers.formReducer
})

const store = createStore(
    mainReducer,
    {},
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

//Planning state:

//  state = {
//      smurfs = [
//          {smurf1},
//          {smurf2}
//      ],
//        form = {
//           name: x,
//           age: x,
//           height: x,
//           id: new Date() 
//        }
//  }