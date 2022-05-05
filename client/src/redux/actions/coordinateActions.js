import { GET_CORDINATE } from "../types/constants";
export const getCoordinate = (coordinateArr) => {
  return {
    type: GET_CORDINATE,
    payload: coordinateArr,
  };
};
