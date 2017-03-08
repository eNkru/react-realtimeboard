import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.boards, action) {
  switch (action.type) {
    case types.ADD_BOARD:
      return [...state, Object.assign({}, action.board)];
    default:
      return state;
  }
}
