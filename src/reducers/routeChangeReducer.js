import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.location, action) {
  if (action.type == types.ROUTE_CHANGE) {
    return action.location;
  }
  return state;
}
