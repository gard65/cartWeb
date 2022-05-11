import { SET_ROUTES_TO_STATE } from "../types/constants";

export const setRoutesToState = (routes)=>{
  return {
    type: SET_ROUTES_TO_STATE,
    payload: routes,
  };
}

