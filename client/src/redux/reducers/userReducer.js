import {initState} from "../init/initState";
import { SET_USER, UNSET_USER } from '../types/User.types'

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
