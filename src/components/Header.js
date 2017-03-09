import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {activeItem: 'home'};
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event, {name}) {
    this.setState({activeItem: name});
  }

  render() {
    const {activeItem} = this.state;

    return (
      <Menu pointing secondary stackable>
        <Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/csr" name="csr" active={activeItem === 'csr'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} to="/agency" name="agency" active={activeItem === 'agency'} onClick={this.handleItemClick}/>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/about" name="about" active={activeItem === 'about'} onClick={this.handleItemClick}/>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
