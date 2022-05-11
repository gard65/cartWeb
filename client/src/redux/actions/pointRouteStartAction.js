import { GET_POINT_START } from "../types/constants";

export const getPointStartAction =(pointA)=>{
  return {
    type: GET_POINT_START,
    payload: pointA
  };
}