import React, {PropTypes} from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.actions.logout();
  }

  render() {
    const {loading, login, location} = this.props;

    return (
      <Menu pointing secondary stackable>
        <Menu.Item as={Link} to="/" name="home" active={location === '/'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/csr" name="csr" active={location === '/csr'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/agency" name="agency" active={location === '/agency'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/about" name="about" active={location === '/about'} onClick={this.handleItemClick}/>
        {loading && <Menu.Item><Icon loading name="spinner"/></Menu.Item>}

        <Menu.Menu position="right">
          {!login && <Menu.Item as={Link} to="/login" name="login" active={location === '/login'} onClick={this.handleItemClick}/> }
          {login && <Menu.Item as={Link} to="/" name="logout" onClick={this.logout}/> }
        </Menu.Menu>
      </Menu>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  login: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.numberAjaxCallsInProgress > 0,
    login: state.login,
    location: state.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
