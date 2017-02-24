import React, { PropTypes } from 'react';

const Board = ({boards}) => {
  return (
    <div>
      {boards.map((board, index) => {
        return <div key={index}>{board.stopNumber}</div>;
      })}
    </div>
  );
};

Board.propTypes = {
  boards: PropTypes.array.isRequired
};

export default Board;
