import * as types from '../actions/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.ADD_BOARD:
      return [...state, Object.assign({}, action.board)];
    default:
      return state;
  }
}
