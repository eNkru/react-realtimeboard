import * as types from './actionTypes';
import agencyApi from '../api/mockAgencyApi';
import {beginAjaxCall} from './ajaxStatusAction';

export function getAllAgenciesSuccess(agencies) {
  return {type: types.GET_ALL_AGENCIES_SUCCESS, agencies};
}

export function getAllAgencies() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return agencyApi.getAllAgencies().then(agencies => {
      dispatch(getAllAgenciesSuccess(agencies));
    }).catch(error => {
      throw(error);
    });
  };
}
