import {combineReducers} from 'redux';
import boards from './boardReducer';
import agencies from './agenciesReducer';
import csrs from './csrReducer';
import numberAjaxCallsInProgress from './ajaxStatusReducer';
import login from './loginReducer';
import location from './routeChangeReducer';

const rootReducer = combineReducers({
  boards,
  agencies,
  csrs,
  numberAjaxCallsInProgress,
  login,
  location
});

export default rootReducer;
