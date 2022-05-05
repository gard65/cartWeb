import {combineReducers} from 'redux';
import { addItineraryReducer } from './addItineraryReducer';
import { getCenterReducer } from './getCenterReducer';
import { getPointReducer } from './getPointReucer';

export const rootReducers = combineReducers({
  mapState: getCenterReducer,
  coordinates: getPointReducer,
  itinerary: addItineraryReducer
});