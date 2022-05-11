/* eslint-disable default-case */
import {initState} from "../init/initState";
import { SET_USER, UNSET_USER, SET_PASSPORT_CONFIRM, SET_AVTONUM_CONFIRM, SET_DRIVER_LICENSE_CONFIRM, SET_INFO_USER, SET_USER_ROLE_TO_STATE  } from '../types/User.types'
import { IS_LOADING, IS_NOT_LOADING } from "../types/loaderTypes";
export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
        
            return action.payload
           
        case UNSET_USER:
          return null
        case SET_INFO_USER:
       
            return {...state, ...action.payload}
        case SET_USER_ROLE_TO_STATE:
          return {...state, isDriver: action.payload}
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

export const loaderReduser = ( state = initState, action) => {
  switch(action.type){
    case IS_LOADING:
      return false
      case IS_NOT_LOADING:
        return true
        default:
        return state
  }
}
