import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as boardActions from '../actions/boardActions';
import {bindActionCreators} from 'redux';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      board: {stopNumber: ""}
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onStopChange = this.onStopChange.bind(this);
  }

  onStopChange(event) {
    const board = this.state.board;
    board.stopNumber = event.target.value;
    this.setState({board});
  }

  onClickSave() {
    this.props.actions.addBoard(this.state.board);
  }

  boardRow(board, index) {
    return <div key={index}>{board.stopNumber}</div>;
  }

  render() {
    return (
      <div>
        <h1>Auckland Transport Realtime Board</h1>
        {this.props.boards.map(this.boardRow)}
        <h2>Add Stop</h2>
        <input type="text" value={this.state.board.stopNumber} onChange={this.onStopChange}/>
        <input type="submit" className="btn btn-primary" value="Save" onClick={this.onClickSave}/>
        <Link to="about" className="btn btn-primary">About this application</Link>
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  boards: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    boards: state.boards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(boardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
