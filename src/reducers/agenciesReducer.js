import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.agencies, action) {
  switch (action.type) {
    case types.GET_ALL_AGENCIES_SUCCESS:
      return action.agencies;
    default:
      return state;
  }
}
