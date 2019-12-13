import React, { useEffect } from "react";
import {connect} from 'react-redux'
import {getSmurfs} from '../state/actionCreators'
import Form from './Form'
import "./App.css";
import axios from 'axios'


function App({getSmurfs, smurfData}) {
  
const deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
  }
  
  useEffect(() => {
    getSmurfs()
  }, [])

  return (
    <div className="App">
      <h1>Smurfs</h1>
      {smurfData.map((curr) => {
        return(
          <div className='smurf' key={curr.id}>
            <p>Name: {curr.name}</p>
            <p>Age: {curr.age}</p>
            <p>Height: {curr.height}</p>
            <button onClick={ function () {deleteSmurf(curr.id)}}>Delete Smurf</button>
          </div>
        )
      })}
      <Form />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    smurfData: state.smurfData
  };
}
export default connect(
  mapStateToProps, 
  { getSmurfs } 
)(App);
