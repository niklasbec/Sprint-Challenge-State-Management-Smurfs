import * as types from './actionTypes'
import axios from 'axios'

export const getSmurfs = () => (dispatch) => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
          const smurfData = response.data
        dispatch({
            type: types.SMURF_DATA,
            payload: smurfData,
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

export const deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
}