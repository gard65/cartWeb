import { initState } from "../init/initState";
import { POST_TIME_DEPARTURE } from "../types/constants";

export const postTimeDepartReducer = (state = initState,action)=>{
switch (action.type){
  case POST_TIME_DEPARTURE:
    return action.payload;
    default:
      return state;
}
}