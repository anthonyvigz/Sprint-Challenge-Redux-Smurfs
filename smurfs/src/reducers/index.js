/// importing all the actions 

import { 
  LOADING_SMURFS,
  LOADED_SMURFS,
  FAILED_SMURFS,
  ADDING_SMURF,
  ADDED_SMURF,
  FAILED_ADD, 
  UPDATING_SMURF,
  UPDATED_SMURF,
  FAILED_UPDATE
} from '../actions/index'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    /// LOADING SMURF CASES

    case LOADING_SMURFS: {
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
    }

    case LOADED_SMURFS: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
    }

    case FAILED_SMURFS: {
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload.message
      }
    }

    /// ADDING SMURF CASES

    case ADDING_SMURF: {
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
    }

    case ADDED_SMURF: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
    }

    case FAILED_ADD: {
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload.message
      }
    }


    /// UPDATING SMURF CASES 

    case UPDATING_SMURF: {
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: true,
        deletingSmurf: false,
        error: null
      }
    }

    case UPDATED_SMURF: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
    }

    case FAILED_UPDATE: {
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload.message
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;