import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Agency from './components/Agency';
import CustomerService from './components/CustomerService';
import LoginPage from "./components/LoginPage";
import NotFound from "./components/NotFound";

const checkAuth = (store, nextState, replace) => {
  const {login} = store.getState();

  if (login) {
    replace(null, nextState.location.pathname);
  } else {
    replace("/login");
  }
};

export default (store) => (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route onEnter={checkAuth.bind(this, store)}>
      <Route path="/csr" component={CustomerService}/>
      <Route path="/agency" component={Agency}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
