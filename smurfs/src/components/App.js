import React, { useEffect } from "react";
import {connect} from 'react-redux'
import {getSmurfs} from '../state/actionCreators'
import "./App.css";

function App({getSmurfs, smurfData}) {

  useEffect(() => {
    getSmurfs()
  }, [])

  return (
    <div className="App">
      <h1>Smurfs</h1>
      {smurfData.map((curr) => {
        return(
          <div className='smurf'>
            <p>Name: {curr.name}</p>
            <p>Age: {curr.age}</p>
            <p>Height: {curr.height}</p>
          </div>
        )
      })}
      <form>
        <input name='name' placeholder='Smurf name here' />
        <input name='age' placeholder='Smurf age here' />
        <input name='height' placeholder='Smurf height here' />

        <button type='submit'>Add</button>
      </form>
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
