import { IS_LOADING, IS_NOT_LOADING } from '../types/loaderTypes'

export const ACTION_setLoader = () => ({type: IS_LOADING,})
export const ACTION_unSetLoader = () => ({type: IS_NOT_LOADING,})
