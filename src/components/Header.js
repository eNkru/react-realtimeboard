import React, {PropTypes} from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {activeItem: 'home'};
    this.handleItemClick = this.handleItemClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleItemClick(event, {name}) {
    this.setState({activeItem: name});
  }

  logout() {
    this.props.actions.logout();
  }

  render() {
    const {activeItem} = this.state;
    const {loading, login} = this.props;

    return (
      <Menu pointing secondary stackable>
        <Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/csr" name="csr" active={activeItem === 'csr'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/agency" name="agency" active={activeItem === 'agency'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/about" name="about" active={activeItem === 'about'} onClick={this.handleItemClick}/>
        {loading && <Menu.Item><Icon loading name="spinner"/></Menu.Item>}

        <Menu.Menu position="right">
          {!login && <Menu.Item as={Link} to="/login" name="login" active={activeItem === 'login'} onClick={this.handleItemClick}/> }
          {login && <Menu.Item as={Link} to="/" name="logout" active={activeItem === 'home'} onClick={this.logout}/> }
        </Menu.Menu>
      </Menu>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  login: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Header);
