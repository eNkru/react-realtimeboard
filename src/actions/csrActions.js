import * as types from './actionTypes';
import csrApi from '../api/mockCustomerServiceApi';

export function getAllCsrsSuccess(csrs) {
  return {type: types.GET_ALL_CSRS_SUCCESS, csrs};
}

export function getAllCsrs() {
  return function (dispatch) {
    return csrApi.getAllCustomerServices().then(csrs => {
      dispatch(getAllCsrsSuccess(csrs));
    }).catch(error => {
      throw error;
    });
  };
}
