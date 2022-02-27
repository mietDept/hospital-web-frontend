import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "",
    email: "",
    phno: "",
    token: "",
    gstno: "",
    expiresIn: "",
    regno: "",
    certificateno: "",
    approvalstatus: "",
    place: "",
    branch: "",
    ishospital: "",
};

export const userSlice = createSlice({
    name: "user",
    initial: {
        value: initialStateValue,
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
        register: (state, action) => {
            state.value
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
