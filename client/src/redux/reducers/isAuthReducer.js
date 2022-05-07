import {initState} from "../init/initState";
import { IS_AUTH, IS_NOT_AUTH } from '../types/User.types'


export const isAuthReducer = (state = initState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return true
        case IS_NOT_AUTH:
            return false
        default:
            return state
    }
}
