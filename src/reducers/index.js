import {combineReducers} from 'redux';
import boards from './boardReducer';
import agencies from './agenciesReducer';
import csrs from './csrReducer';

const rootReducer = combineReducers({
  boards,
  agencies,
  csrs
});

export default rootReducer;
