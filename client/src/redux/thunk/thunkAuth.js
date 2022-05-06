import AuthService from "../../redux/service/AuthService";
import {getUser, isAuth} from "../actions/userActions";
import {API_URL} from "../../http";
import axios from "axios";

export const THUNK_ACTION_LOGIN = (userData) => async (dispatch) => {
    try {
        const response = await AuthService.login(userData);
        dispatch(getUser(response.data.userDto));
    } catch (error) {
        console.log(error);
    }
};


export const THUNK_checkAuth = () => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/refresh`, {
            withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        dispatch(getUser({user: response.data.userDto}))
        dispatch(isAuth());
    } catch (e) {
        console.log(e)
    }
};
