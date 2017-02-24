import * as types from './actionTypes';
import agencyApi from '../api/mockAgencyApi';

export function getAllAgenciesSuccess(agencies) {
  return {type: types.GET_ALL_AGENCIES_SUCCESS, agencies};
}

export function getAllAgencies() {
  return function (dispatch) {
    return agencyApi.getAllAgencies().then(agencies => {
      dispatch(getAllAgenciesSuccess(agencies));
    }).catch(error => {
      throw(error);
    });
  };
}
