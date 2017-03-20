import React, {Component, PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as csrActions from '../actions/csrActions';
import CSRPanel from './CSRPanel';
import {Segment, Container, Header} from 'semantic-ui-react';

class CustomerService extends Component {

  componentWillMount() {
    this.props.actions.getAllCsrs();
  }

  render() {
    return (
      <Container>
        <Header as="h2" attached="top">
          Customer Services
        </Header>
        <Segment raised stacked attached>
          {this.props.csrs.map((csr) => {
            return <CSRPanel key={csr.id} csr={csr}/>;
          })}
        </Segment>
      </Container>
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
