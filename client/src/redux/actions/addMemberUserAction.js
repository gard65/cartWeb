import { initState } from "../init/initState";
import { ADD_ROUTE } from "../types/constants";

export const addRouteAction = (obj) => {
  return {
    type: ADD_ROUTE,
    payload: obj,
  };
};
