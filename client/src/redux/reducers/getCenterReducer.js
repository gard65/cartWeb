import { initState } from "../init/initState";
import {GET_CENTER} from '../types/constants';

export const getCenterReducer = (state = initState, action)=>{
switch (action.type) {
  case GET_CENTER:
   return {...action.payload}
  default:
    return state;
}
}