import React, {PropTypes}from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as agenciesActions from '../actions/agenciesActions';
import AgencyPanel from './AgencyPanel';

class Agency extends React.Component {

  componentDidMount() {
    this.props.actions.getAllAgencies();
  }

  render() {
    const {agencies} = this.props;
    return (
      <div className="jumbotron">
        <h1>Agency page</h1>
        <AgencyPanel agencies={agencies}/>
      </div>
    )
  }
}

Agency.propTypes = {
  actions: PropTypes.object.isRequired,
  agencies: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    agencies: state.agencies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(agenciesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Agency);
