import { initState } from "../init/initState";
import { SET_ROUTES_TO_STATE } from "../types/constants";

export const routesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ROUTES_TO_STATE:
      return action.payload;
    // case 'ADD_USER':
    //   return state.map(el => {
    //     if (el.routeId === action.payload.routeId) {
    //      return el.userTwo = action.payload.userId
    //     }
    //   })

    default:
      return state;
  }
};
