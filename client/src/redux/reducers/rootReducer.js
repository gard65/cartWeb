import {combineReducers} from 'redux'
import { addItineraryReducer } from './addItineraryReducer';
import { getCenterReducer } from './getCenterReducer';
import { getPointReducer } from './getPointReucer';
import {userReducer} from "./userReducer";
import { isAuthReducer } from './isAuthReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    isAuth: isAuthReducer,
    mapState: getCenterReducer,
    coordinates: getPointReducer,
    itinerary: addItineraryReducer
})
