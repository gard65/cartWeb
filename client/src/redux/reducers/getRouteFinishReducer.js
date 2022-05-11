import { initState } from "../init/initState";
import { GET_POINT_FINISH } from "../types/constants";

export const getRoutFinishReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POINT_FINISH:
      return action.payload;
    default:
      return state;
  }
};
