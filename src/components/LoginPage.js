import React, {PropTypes} from "react";
import {Container, Button, Form} from 'semantic-ui-react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formData: {username: "", password: ""}};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const {username, password} = this.state.formData;
    this.props.actions.login(username, password);
  }

  onChange(name, e) {
    const formData = this.state.formData;
    formData[name] = e.target.value;
    this.setState({formData});
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Username</label>
            <input type="text" onChange={this.onChange.bind(this, "username")} placeholder="howard.ju"/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input onChange={this.onChange.bind(this, "password")} placeholder="******" type="password"/>
          </Form.Field>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
