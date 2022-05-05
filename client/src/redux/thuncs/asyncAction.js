import React from "react";
import { addItineraryAction } from "../actions/addItineraryActions";
import { getCenter } from "../actions/centerActions";
import { getCoordinate } from "../actions/coordinateActions";

export  const getMapStateFromDb =()=>(dispatch)=>{
  const mapStateObj = {
    center: [55.75, 37.57],
    zoom: 10,
  };
  const coordinatesArr = [
    [55.684758, 37.738521],
    [55.758291, 37.740831],
    [55.706638, 37.597113],
  ];
  dispatch(getCenter(mapStateObj ));
  dispatch(getCoordinate(coordinatesArr));
};

// export const addItineraryFromDb = () => (dispatch) => {
//   dispatch(addItineraryAction( {...itinerary} ));
// };
