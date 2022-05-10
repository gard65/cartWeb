import { IS_AUTH, IS_NOT_AUTH, SET_USER, UNSET_USER, SET_PASSPORT_CONFIRM, SET_AVTONUM_CONFIRM, SET_DRIVER_LICENSE_CONFIRM, SET_INFO_USER } from '../types/User.types'

export const ACTION_isAuth = () => ({type: IS_AUTH})
export const ACTION_isNotAuth = () => ({type: IS_NOT_AUTH})
export const ACTION_unsetUser = () => ({type: UNSET_USER})
export const ACTION_setUser = (user) => ({type: SET_USER, payload: user})


export const ACTION_setInfoToUser = (infoUser) =>({type: SET_INFO_USER, payload: infoUser})

export const passportConfirm = (passport) =>({type: SET_PASSPORT_CONFIRM, payload: passport})
export const driverLicenseConfirm = (driverLicense) => {

  return {type: SET_DRIVER_LICENSE_CONFIRM, payload: driverLicense}
}
export const avtoNumConfirm = (avtoNum) =>({type: SET_AVTONUM_CONFIRM, payload: avtoNum})
