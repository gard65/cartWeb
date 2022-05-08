/* eslint-disable default-case */
import {initState} from "../init/initState";
import { SET_USER, UNSET_USER, SET_PASSPORT_CONFIRM, SET_AVTONUM_CONFIRM, SET_DRIVER_LICENSE_CONFIRM  } from '../types/User.types'

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload
        case UNSET_USER:
            return null
       
      
  
        
        default:
            return state
    }
}
export const userPassReducer = ( state = initState, action) => {
    switch(action.type) {
      case SET_PASSPORT_CONFIRM:
        return action.payload
        default:
          return state
    }
}

export const userAvtoReducer = ( state = initState, action) => {
    switch(action.type) {
      case SET_AVTONUM_CONFIRM:
        return action.payload
        default:
          return state
    }
  }

export const userDriverLicReducer = ( state = initState, action) => {
    switch(action.type) {
      case SET_DRIVER_LICENSE_CONFIRM:
        return action.payload
        default:
          return state
    }
}
