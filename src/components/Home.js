import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Main page</h1>
        <Link to="about" className="btn btn-primary btn-lg">About Me</Link>
      </div>
    );
  }
}

export default Home;
