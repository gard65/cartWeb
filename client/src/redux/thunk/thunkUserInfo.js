
import {passportConfirm, avtoNumConfirm, driverLicenseConfirm , ACTION_setInfoToUser} from "../actions/userActions"
import axios from "axios";
import {API_URL} from "../../http";
import { ACTION_setLoader } from "../actions/loaderActions";

export const THUNK_editUserInfo = (userData) =>async (dispatch) =>{
  console.log("++++++======>>>", userData);
try {
  const response = await axios.post(`${API_URL}/userInfo`, userData)
  dispatch(passportConfirm(response.data.passport))
  dispatch(avtoNumConfirm(response.data.avtoNum))
  dispatch(driverLicenseConfirm(response.data.driverLicense))

} catch(error){
  console.log(error);
}
}

export const THUNK_getUserInfo = (userId) => async (dispatch) =>{
  
  const response = await axios.get(`${API_URL}/userInfo/${userId}`)
console.log(response.data);
  
  dispatch( ACTION_setInfoToUser (response.data) ) 
  dispatch(passportConfirm(true))
  dispatch( ACTION_setLoader())
}
