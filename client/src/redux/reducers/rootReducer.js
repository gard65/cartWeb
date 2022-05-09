import {combineReducers} from 'redux'
import { addItineraryReducer } from './addItineraryReducer';
import { getCenterReducer } from './getCenterReducer';
import { getPointReducer } from './getPointReucer';
import { userReducer,userPassReducer, userAvtoReducer, userDriverLicReducer  } from "./userReducer";
import { isAuthReducer } from './isAuthReducer'
import { loaderReduser } from './userReducer';
export const rootReducer = combineReducers({
    user: userReducer,
    isAuth: isAuthReducer,
    mapState: getCenterReducer,
    coordinates: getPointReducer,
    itinerary: addItineraryReducer,
    passportConfirm: userPassReducer,
    avtoNumConfirm: userAvtoReducer,
    driverLicenseConfirm: userDriverLicReducer,
    loader: loaderReduser
})
