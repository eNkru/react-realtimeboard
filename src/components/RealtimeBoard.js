import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as boardActions from '../actions/boardActions';
import {bindActionCreators} from 'redux';
import Board from './Board';
import {Segment, Input, Button, Header, Container} from 'semantic-ui-react';

class RealtimeBoard extends React.Component {
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
      <Container>
        <Header as="h2" attached="top">
          Auckland Transport Realtime Board
        </Header>
        <Segment raised stacked attached>
          <Input icon="window maximize" iconPosition="left" placeholder="Enter stop number" onChange={this.onStopChange}/>
          <Button primary type="submit" onClick={this.onClickAdd}>Add!</Button>
          <Board boards={boards}/>
        </Segment>
      </Container>
    );
  }
  }

RealtimeBoard.propTypes = {
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

  export default connect(mapStateToProps, mapDispatchToProps)(RealtimeBoard);
