import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {reducer} from "./InitState/reducer";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer)