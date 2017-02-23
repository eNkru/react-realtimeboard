import * as types from './actionTypes';

export function addBoard(board) {
  return {type: types.ADD_BOARD, board};
}
