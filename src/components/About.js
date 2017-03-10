import React from 'react';
import {Container} from 'semantic-ui-react';

class About extends React.Component {
  render() {
    return (
      <Container>
        <h1>What this application about</h1>
        <p>The purpose of this application is to learn <a href="https://facebook.github.io/react/">React</a> | <a href="http://redux.js.org/">Redux</a> for myself.</p>
        <p>Please let me know any feedback via <a href="http://enkru.github.io">http://enkru.github.io</a></p>
      </Container>
    );
  }
}

export default About;
