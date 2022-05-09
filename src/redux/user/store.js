import { createStore,applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./userReducer";


const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== "production") {
        const {composeWithDevTools} = require("redux-devtools-extension")
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}


const store = createStore(userReducer,bindMiddleware([thunkMiddleware]));

export {store};