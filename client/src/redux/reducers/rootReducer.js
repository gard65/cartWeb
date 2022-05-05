import {combineReducers} from 'redux'
import { addItineraryReducer } from './addItineraryReducer';
import { getCenterReducer } from './getCenterReducer';
import { getPointReducer } from './getPointReucer';
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    mapState: getCenterReducer,
    coordinates: getPointReducer,
    itinerary: addItineraryReducer
})
