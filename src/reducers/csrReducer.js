import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.csrs, action) {
  switch (action.type) {
    case types.GET_ALL_CSRS_SUCCESS:
      return action.csrs;
    default:
      return state;
  }
}
