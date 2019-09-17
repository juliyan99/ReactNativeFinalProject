import { applyMiddleware, createStore, compose } from "redux";
import myReducer from './reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const midty = applyMiddleware(thunk, logger)
const store = createStore(myReducer, composeEnhanchers(midty));

export default store