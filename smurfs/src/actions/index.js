import axios from 'axios'

/// export action types 

export const LOADING_SMURFS = 'LOADING_SMURFS'
export const LOADED_SMURFS = 'LOADED_SMURFS'
export const FAILED_SMURFS = 'FAILED_SMURFS'
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDED_SMURF = 'ADDED_SMURF'
export const FAILED_ADD = 'FAILED_ADD'
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const UPDATED_SMURF = 'UPDATED_SMURF'
export const FAILED_UPDATE = 'FAILED_UPDATE'
export const DELETING_SMURF = 'DELETING_SMURF'
export const DELETED_SMURF = 'DELETED_SMURF'
export const FAILED_DELETE = 'FAILED_DELETE'



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

/// adds a smurf to the server

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


/// updates a smurf on the server

export function updateSmurf(payload, id) {

  return dispatch => {
    
    dispatch({ type: UPDATING_SMURF });

    return axios.put(`http://localhost:3333/smurfs/${id}`, payload)
      .then((response) => {
        dispatch({ type: UPDATED_SMURF, payload: response.data });
      })

      .catch((error) => {
        dispatch({ type: FAILED_UPDATE, payload: error })
      })

      }
};

/// delete a smurf from the server

export function deleteSmurf(id) {

  return dispatch => {
    
    dispatch({ type: DELETING_SMURF });

    return axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((response) => {
        dispatch({ type: DELETED_SMURF, payload: response.data });
      })

      .catch((error) => {
        dispatch({ type: FAILED_DELETE, payload: error })
      })

      }
};