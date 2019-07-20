/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const LOADING_SMURFS = 'LOADING_SMURFS'
export const LOADED_SMURFS = 'LOADED_SMURFS'
export const FAILED_SMURFS = 'FAILED_SMURFS'
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDED_SMURF = 'ADDED_SMURF'
export const FAILED_ADD = 'FAILED_ADD'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


// loads the smurfs to the state 

export function getSmurfs() {
  
  return dispatch => {
    
    dispatch({ type: LOADING_SMURFS });

    return axios.get('http://localhost:3333/smurfs/')
      .then((response) => {
        dispatch({ type: LOADED_SMURFS, payload: response.data });
      })

      .catch((error) => {
        dispatch({ type: FAILED_SMURFS, payload: error })
      })

      }
};

export function addSmurf(payload) {

  return dispatch => {
    
    dispatch({ type: ADDING_SMURF });

    return axios.post('http://localhost:3333/smurfs/', payload)
      .then((response) => {
        dispatch({ type: ADDED_SMURF, payload: response.data });
      })

      .catch((error) => {
        dispatch({ type: FAILED_ADD, payload: error })
      })

      }
};