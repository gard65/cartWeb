import { GET_POINT_FINISH } from "../types/constants";

export const getPointFinishAction = (pointB) => {
  return {
    type: GET_POINT_FINISH,
    payload: pointB,
  };
};
