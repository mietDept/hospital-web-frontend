import axios from "axios";
import { url } from "../../api";

export const signUp = (user) => {
    return (dispatch) => {
        axios
            .post(`${url}/register`, user)
            .then((token) => {
                localStorage.setItem("token", token.data);
                dispatch({
                    type: "SIGN_UP",
                    token: token.data,
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const logIn = (user) => {
    return (dispatch) => {
        axios
            .post(`${url}/hospitallogin`, user)
            .then((token) => {
                localStorage.setItem("token", token.data);
                dispatch({
                    type: "SIGN_UP",
                    token: token.data,
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token
        if (token) {
            dispatch({
                type: "USER_LOADED",
                token
            })
        }
    }
}