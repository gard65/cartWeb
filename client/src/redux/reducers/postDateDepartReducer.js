import { initState } from "../init/initState";
import { POST_DATE_DEPARTURE } from "../types/constants";

export const postDateDepartureReducer = (state = initState, action)=>{
  switch (action.type){
    case POST_DATE_DEPARTURE:
      return action.payload;
      default:
        return state;
  } 
}