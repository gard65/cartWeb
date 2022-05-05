import { initState } from "../init/initState";
import { ADD_ITINERARY } from "../types/constants";

export const addItineraryReducer = (state = initState, action)=>{
  switch (action.type){
    case ADD_ITINERARY:
      return{...action.payload}
      default:
        return state;
  }
}