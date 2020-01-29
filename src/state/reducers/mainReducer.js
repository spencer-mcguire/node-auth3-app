import * as types from '../types'; // types can be used as 'types.<YOUR-TYPE>'

// STATE starts here
const initialState = {
  data: [],
  username: '',
  fetchingData: false,
  error: ''
};

// Reducer
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // place cases here
    case types.REGISTER_START:
      return {
        ...state,
        fetchingData: true
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        username: action.payload,
        fetchingData: false
      };

    case types.REGISTER_FAIL:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
