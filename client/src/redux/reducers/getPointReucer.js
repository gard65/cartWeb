import { initState } from "../init/initState";
import { GET_CORDINATE } from "../types/constants";

export const getPointReducer = (state = initState,action)=>{
switch (action.type) {
  case GET_CORDINATE:
    return action.payload;
  default:
    return state;
}
}
