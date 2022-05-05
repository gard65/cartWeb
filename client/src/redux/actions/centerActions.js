import { GET_CENTER } from "../types/constants";
export const getCenter = (centerObj)=>{
return {
  type: GET_CENTER,
  payload: centerObj,
};
}