import { POST_DATE_DEPARTURE } from "../types/constants";

export const postDateDepartAction = (dateDepart)=>{
  return {
    type: POST_DATE_DEPARTURE,
    payload: dateDepart,
  };
}