
import {passportConfirm, driverLicenseConfirm, avtoNumConfirm, ACTION_setInfoToUser} from "../actions/userActions"
import axios from "axios";
import {API_URL} from "../../http";
import { ACTION_setLoader } from "../actions/loaderActions";

export const THUNK_editUserInfo = (userData) =>async (dispatch) =>{

try {
  const response = await axios.post(`${API_URL}/userInfo`, userData)
  // dispatch( ACTION_setInfoToUser (response.data) ) 
  dispatch(passportConfirm(response.data.passport ))
  dispatch(driverLicenseConfirm(response.data.driverLicense ))
  dispatch(avtoNumConfirm(response.data.avtoNum))
  dispatch( ACTION_setLoader())
  
} catch(error){
  console.log(error);
}
}

export const THUNK_getUserInfo = (userId) => async (dispatch) =>{
  
  const response = await axios.get(`${API_URL}/userInfo/${userId}`)

  dispatch( ACTION_setInfoToUser(response.data)) 
  dispatch( ACTION_setLoader())
}
