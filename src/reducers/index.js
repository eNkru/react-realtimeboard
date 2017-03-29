import {combineReducers} from 'redux';
import boards from './boardReducer';
import agencies from './agenciesReducer';
import csrs from './csrReducer';
import numberAjaxCallsInProgress from './ajaxStatusReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
  boards,
  agencies,
  csrs,
  numberAjaxCallsInProgress,
  login
});

export default rootReducer;
