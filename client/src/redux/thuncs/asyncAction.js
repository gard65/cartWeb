import { getCenter } from "../actions/centerActions";
import { getCoordinate } from "../actions/coordinateActions";
import axios from "axios";
import { getPointStartAction } from "../actions/pointRouteStartAction";
import { getPointFinishAction } from "../actions/pointRouteFinishAction";
import { setRoutesToState } from "../actions/routeActions";

export const getMapStateFromDb = () => (dispatch) => {
  const mapStateObj = {
    center: [55.75, 37.57],
    zoom: 10,
  };

  const coordinatesArr = [
    [55.684758, 37.738521],
    [55.758291, 37.740831],
    [55.706638, 37.597113],
  ];
  dispatch(getCenter(mapStateObj));
  dispatch(getCoordinate(coordinatesArr));
};
export const addItineraryFromDb = (pointA, pointB) => async (dispatch) => {
  const resPointA = await axios.get(
    `https://api.geotree.ru/address.php?term=${pointA}&limit=1`
  );

  const resPointB = await axios.get(
    `https://api.geotree.ru/address.php?term=${pointB}&limit=1`
    );

  const pointStart = [
    resPointA.data[0].geo_center.lat,
    resPointA.data[0].geo_center.lon,
  ];
  const pointFinish = [
    resPointB.data[0].geo_center.lat,
    resPointB.data[0].geo_center.lon,
  ];
  dispatch(getPointStartAction(pointStart));
  dispatch(getPointFinishAction(pointFinish));
};
export const sendDateAndTime =
  (dateDepart, timeDepart, pointA, pointB, userId, isDriver) => async () => {
    await axios.post(`http://localhost:3001/route`, {
      time: timeDepart,
      date: dateDepart,
      pointA,
      pointB,
      userId,
      isDriver
    });
  };
export const THUNK_getRoutesFromDB = (isDriver)=> async (dispatch) => {
  const routes = await axios.get(`http://localhost:3001/route/${!isDriver}`)
  dispatch(setRoutesToState(routes.data))
}
