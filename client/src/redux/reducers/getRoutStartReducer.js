import { initState } from "../init/initState";
import { GET_POINT_START } from "../types/constants";

export const getRoutStartReducer = (state = initState,action)=>{
  switch (action.type) {
    case GET_POINT_START:
      return action.payload;
    default:
      return state;
  }
}