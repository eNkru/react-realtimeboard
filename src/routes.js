import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Agency from './components/Agency';
import CustomerService from './components/CustomerService';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="csr" component={CustomerService}/>
    <Route path="agency" component={Agency}/>
    <Route path="about" component={About}/>
  </Route>
);
