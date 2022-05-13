import { initState } from "../init/initState";
import { ADD_ROUTE } from "../types/constants";

export const addMemberReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ROUTE:
      return  [...state, action.payload] ;
    default:
      return state;
  }
};
