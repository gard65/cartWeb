import {combineReducers} from 'redux'
import { addItineraryReducer } from './addItineraryReducer';
import { getCenterReducer } from './getCenterReducer';
import { getPointReducer } from './getPointReucer';
import { getRoutFinishReducer } from "./getRouteFinishReducer";
import { getRoutStartReducer } from "./getRoutStartReducer";
import { userReducer,userPassReducer, userAvtoReducer, userDriverLicReducer  } from "./userReducer";
import { isAuthReducer } from './isAuthReducer'
import { loaderReduser } from './userReducer';
export const rootReducer = combineReducers({
  user: userReducer,
  isAuth: isAuthReducer,
  mapState: getCenterReducer,
  coordinates: getPointReducer,
  itinerary: addItineraryReducer,
  pointStart: getRoutStartReducer,
  pointFinish: getRoutFinishReducer,
  passportConfirm: userPassReducer,
  avtoNumConfirm: userAvtoReducer,
  driverLicenseConfirm: userDriverLicReducer,
  loader: loaderReduser,
});
