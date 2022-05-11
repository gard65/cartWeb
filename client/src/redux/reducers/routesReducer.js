import { initState } from "../init/initState";
import { SET_ROUTES_TO_STATE } from "../types/constants";

export const routesReducer = (state = initState,action)=>{
  switch (action.type) {
    case SET_ROUTES_TO_STATE:
      return action.payload;
    default:
      return state;
  }
}

