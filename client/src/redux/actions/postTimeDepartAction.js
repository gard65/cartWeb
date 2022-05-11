import { POST_TIME_DEPARTURE } from "../types/constants";

export const postTimeDepartAction = (timeDepart)=>{
  return {
    type: POST_TIME_DEPARTURE,
    payload: timeDepart,
  };
}