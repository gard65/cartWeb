import { initState } from "../init/initState";

export const selectedRouteReducer = (state = initState, action) => {
  switch (action.type) {
    case "SELECT_ROUTE_CHAT":
      return action.payload;
    default:
      return state;
  }
};
