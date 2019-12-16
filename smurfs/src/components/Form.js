import React, { useReducer } from 'react';
import axios from 'axios'
import * as types from '../state/actionTypes'

const initialState = {
  name: '',
  age: null,
  height: ''
}


function reducer(state, action) { 
  switch (action.type) {
    case types.SUBMIT: 
      return initialState
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state
  }
}

export default function Form() {
  
  const [state, dispatch] = useReducer(reducer, initialState);     //shout or dispatch can be anything


  const onValueChange = event => {
    const {name, value} = event.target
    dispatch({
      type: types.INPUT_CHANGE,
      payload: {
        name,
        value,
      }
    })
  };
  
  const onFormSubmit = event => {
    event.preventDefault()
    dispatch({type: types.SUBMIT,
      payload: {name: state.name, age: state.age, height: state.height}})
    console.log(state);
    axios.post('http://localhost:3333/smurfs', {
        name: state.name,
        age: state.age,
        height: state.height
    })
  };
  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={state.name} onChange={onValueChange} name='name' />
      </label><br />

      <label>age
        <input value={state.age} onChange={onValueChange} name='age' />
      </label><br />

      <label>height
        <input value={state.height} onChange={onValueChange} name='height' />
      </label><br />

      <input type='submit' />
    </form>
  );
}
