import React, {PropTypes} from 'react';
import Header from './Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} login={this.props.login}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.numberAjaxCallsInProgress > 0,
    login: state.login
  };
}

export default connect(mapStateToProps)(App);
