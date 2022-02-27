import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    _id: null,
    hospitalName: null,
    email: null,
    registeredNo: null,
    certificateNo: null,
    gstNo: null,
    email: null,
    password: null,
    rePassword: null,
    phoneNo: null,
    location: null,
    address: null,
    speciality: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP":
            const user = jwtDecode(action.token);
            return {
                ...initialState,
                token: action.token,
                name: user.name,
                email: user.email,
                _id: user._id,
            };
        default:
            return state;
    }
};
