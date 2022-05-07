import { IS_AUTH, IS_NOT_AUTH, SET_USER, UNSET_USER } from '../types/User.types'

export const ACTION_isAuth = () => ({type: IS_AUTH})
export const ACTION_isNotAuth = () => ({type: IS_NOT_AUTH})
export const ACTION_unsetUser = () => ({type: UNSET_USER})
export const ACTION_setUser = (user) => ({type: SET_USER, payload: user})
