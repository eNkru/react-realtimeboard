import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.login, action) {
  if (action.type == types.LOGIN_SUCCESS) {
    // console.log(action.type, action.success);
    return action.success;
  }

  return state;
}
