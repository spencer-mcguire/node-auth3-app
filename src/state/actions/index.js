import * as types from '../types'; // types can be used as 'types.<YOUR-TYPE>'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// ACTIONS LIVE HERE

export const register = creds => dispatch => {
  dispatch({ type: types.REGISTER_START });
  return axiosWithAuth()
    .post('/auth/register', creds)
    .then(res => {
      console.log(res);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.username });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.REGISTER_FAIL, payload: err.data });
    });
};
