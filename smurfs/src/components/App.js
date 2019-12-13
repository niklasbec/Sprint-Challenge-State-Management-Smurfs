import React, { Component } from "react";
import {connect} from 'react-redux'
import {increment} from '../state/actionCreators'
import "./App.css";

function App({increment, count}) {

  return (
    <div className="App">
      <h1>Smurfs</h1>
      <p>{count}</p>
      <button onClick={increment}>Hi</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
export default connect(
  mapStateToProps, 
  { increment } 
)(App);
