import {combineReducers} from 'redux';
import boards from './boardReducer';
import agencies from './agenciesReducer';
import csrs from './csrReducer';
import numberAjaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  boards,
  agencies,
  csrs,
  numberAjaxCallsInProgress
});

export default rootReducer;
