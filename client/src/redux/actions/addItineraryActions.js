import { ADD_ITINERARY } from "../types/constants";
export const addItineraryAction = (valueWhence, whereValue) => {
  return {
    type: ADD_ITINERARY,
    payload: { valueWhence, whereValue },
  };
};
