import * as types from "./actionTypes";

export function routeChange(location) {
  return {type: types.ROUTE_CHANGE, location};
}
