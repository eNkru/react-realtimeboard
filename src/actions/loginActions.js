import * as types from './actionTypes';
import loginApi from "../api/mockLoginApi";
import {beginAjaxCall} from './ajaxStatusAction';
import {browserHistory} from 'react-router';

export function loginSuccess(success) {
  return {type: types.LOGIN_SUCCESS, success};
}

export function logout() {
  return {type: types.LOGOUT};
}

export function login(username, password) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return loginApi.login(username, password).then(success => {
      dispatch(loginSuccess(success));
      forwardTo("/");
    }).catch(error => {
      throw error;
    });
  };
}

function forwardTo(location) {
  browserHistory.push(location);
}
