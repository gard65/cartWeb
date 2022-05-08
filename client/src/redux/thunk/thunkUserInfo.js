
import {passportConfirm, avtoNumConfirm, driverLicenseConfirm } from "../actions/userActions"
import axios from "axios";
import {API_URL} from "../../http";

export const THUNK_editUserInfo = (userData) =>async (dispatch) =>{
try {
  const response = await axios.post(`${API_URL}/userInfo`, userData)
  dispatch(passportConfirm(response.data.passport))
  dispatch(avtoNumConfirm(response.data.avtoNum))
  dispatch(driverLicenseConfirm(response.data.driverLicense))

} catch(error){
  console.log(error);
}
}

