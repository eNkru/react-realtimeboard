import React, {PropTypes}from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as agenciesActions from '../actions/agenciesActions';
import AgencyPanel from './AgencyPanel';
import {Segment, Container, Header} from 'semantic-ui-react';

class Agency extends React.Component {

  componentDidMount() {
    this.props.actions.getAllAgencies();
  }

  render() {
    const {agencies} = this.props;
    return (
      <Container>
        <Header as="h2" attached="top">
          Available Agencies
        </Header>
        <Segment raised stacked attached>
          <AgencyPanel agencies={agencies}/>
        </Segment>
      </Container>
    );
  }
}

Agency.propTypes = {
  actions: PropTypes.object.isRequired,
  agencies: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    agencies: state.agencies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(agenciesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Agency);
