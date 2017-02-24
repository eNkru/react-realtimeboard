import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as boardActions from '../actions/boardActions';
import {bindActionCreators} from 'redux';
import Board from './Board';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      board: {stopNumber: ""}
    };

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onStopChange = this.onStopChange.bind(this);
  }

  onStopChange(event) {
    const board = this.state.board;
    board.stopNumber = event.target.value;
    this.setState({board});
  }

  onClickAdd() {
    this.props.actions.addBoard(this.state.board);
  }

  render() {
    const {boards} = this.props;
    return (
      <div className="jumbotron">
        <h1>Auckland Transport Realtime Board</h1>
        <div className="input-group">
          <span className="input-group-addon">Stop Number</span>
          <input className="form-control" type="text" value={this.state.board.stopNumber} onChange={this.onStopChange}/>
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit" onClick={this.onClickAdd}>Add!</button>
          </span>
        </div>
        <Board boards={boards}/>
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
