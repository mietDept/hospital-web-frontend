import axios from "axios";

import { url } from "../api/index";
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const { data } = await axios.get(
            `${url}/hospitallogin/`,
            {
                username: email,
                password: password,
            },
            config
        );

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
};

export const register = (reguser) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });

        var user = JSON.stringify({
            name: reguser.hospitalName,
            registerno: reguser.registeredNo,
            certno: reguser.certificateNo,
            gstno: reguser.gstNo,
            email: reguser.email,
            password: reguser.password,
            phone: reguser.phoneNo,
            place: reguser.location,
            branch: reguser.address,
            speciality: reguser.speciality,
        });

        var config = {
            method: "post",
            url: `${url}/register`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        };

        const { data } = await axios(config);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
