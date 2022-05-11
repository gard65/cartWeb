import AuthService from "../../redux/service/AuthService";
import { ACTION_setLoader, ACTION_unSetLoader } from '../actions/loaderActions'
import {ACTION_isAuth, ACTION_isNotAuth, ACTION_setUser, ACTION_unsetUser } from "../actions/userActions";
import {API_URL} from "../../http/index";
import axios from "axios";

export const THUNK_logout = () => async (dispatch) => {
  try {
      // dispatch(ACTION_setLoader())
      await AuthService.logout()
      dispatch(ACTION_unsetUser())
      dispatch(ACTION_isNotAuth())
      // dispatch(ACTION_unSetLoader())
  } catch (e) {
      console.log(e)
  } finally {
      // dispatch(ACTION_unSetLoader())
  }
}

export const THUNK_login = (userData) => async (dispatch) => {
  try {
      // dispatch(ACTION_setLoader())
      const response = await AuthService.login(userData)
   
      dispatch(ACTION_setUser({...response.data.user}))
      dispatch(ACTION_isAuth())
      // dispatch(THUNK_getPlayerFromDb(response.data.user.id))
      // dispatch(ACTION_unSetLoader())
  } catch (e) {
      console.log(e)
  } finally {
      // dispatch(ACTION_unSetLoader())
  }
}


export const THUNK_checkAuth = () => async (dispatch) => {
  try {
      dispatch(ACTION_setLoader())
      const response = await AuthService.refresh()
 
      dispatch(ACTION_setUser(response.data.user))
      dispatch(ACTION_isAuth())
      dispatch(ACTION_unSetLoader())
  } catch (e) {
      console.log(e)
  } finally {
      dispatch(ACTION_unSetLoader())
  }
}
