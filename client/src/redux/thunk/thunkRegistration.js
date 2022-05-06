import AuthService from "../service/AuthService";
import {getUser} from "../actions/userActions";

export const THUNK_ACTION_REGISTER = (userData) => async (dispatch) => {
    try {
        const response = await AuthService.registration(userData);
        dispatch(getUser(response.data.userDto));
    } catch (error) {
        console.log(error);
    }
};
