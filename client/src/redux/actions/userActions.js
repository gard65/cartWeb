import {GET_USER, IS_AUTH, IS_NOT_AUTH} from "../types/User.types";

export const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
};
export const isAuth = () => {
    return {
        type: IS_AUTH
    }
};

export const isNotAuth = () => {
    return {
        type: IS_NOT_AUTH
    }
};
