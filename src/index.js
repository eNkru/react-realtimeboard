import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/semantic-ui-css/semantic.css';
import * as routeChangeActions from './actions/routeChangeActions';

const store = configureStore();
browserHistory.listen(location => {store.dispatch(routeChangeActions.routeChange(location.pathname))});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes(store)}/>
  </Provider>,
  document.getElementById('app')
);
