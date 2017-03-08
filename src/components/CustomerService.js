import React, {Component, PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as csrActions from '../actions/csrActions';

class CustomerService extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    this.props.actions.getAllCsrs();
  }

  render() {
    return (
      <div>
        <h1>Component!</h1>
      </div>
    );
  }
}

CustomerService.propTypes = {
  csrs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    csrs: state.csrs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(csrActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerService);
