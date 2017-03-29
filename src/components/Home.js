import React from "react";
import {Container} from "semantic-ui-react";

const Home = () => {

  return (
    <Container>
      <h1>The open-source auckland transport information board</h1>

      <h2>Available Information</h2>
      <li>Customer Service Information</li>
      <li>Agency Information</li>

      <h2>Technology Stack</h2>
      <li>React</li>
      <li>Redux</li>
      <li>Semantic-UI</li>
      <li>google-map-react</li>
      <li>react-router</li>
      <li>redux-thunk</li>

      <h2>Build and Deploy</h2>
      <li>Build by "npm i && npm build"</li>
      <li>Deploy to now.sh by using "cd dist && ns --cmd "list ./content -s""</li>
    </Container>
  );
};

export default Home;
