import {combineReducers} from 'redux';
import boards from './boardReducer';
import agencies from './agenciesReducer';

const rootReducer = combineReducers({
  boards,
  agencies
});

export default rootReducer;
