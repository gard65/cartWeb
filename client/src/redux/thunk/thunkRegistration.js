import AuthService from "../service/AuthService";
// import {getUser} from "../actions/userActions";
// import { ACTION_setLoader, ACTION_unSetLoader } from '../actions/loaderActions'

import {ACTION_isAuth, ACTION_setUser } from "../actions/userActions";

export const THUNK_register = (userData) => async (dispatch) => {
  try {
      // dispatch(ACTION_setLoader())
      const response = await AuthService.registration(userData)
      dispatch(ACTION_setUser({...response.data.user}))
      dispatch(ACTION_isAuth())
      // dispatch(ACTION_unSetLoader())
  } catch (e) {
      console.log(e)
  } finally {
      // dispatch(ACTION_unSetLoader())
  }
}
