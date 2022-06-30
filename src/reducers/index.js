import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import tableReducers from "./tableReducer";

const rootReducers = combineReducers({
    table: tableReducers
})

export const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))