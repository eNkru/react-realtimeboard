export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return [...state, Object.assign({}, action.board)];
    default:
      return state;
  }
}
