import * as types from '../actions/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.GET_ALL_AGENCIES_SUCCESS:
      return action.agencies;
    default:
      return state;
  }
}
