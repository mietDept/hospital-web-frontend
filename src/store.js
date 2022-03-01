import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { combineReducers } from "redux";
import { userLoginReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

export default createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
