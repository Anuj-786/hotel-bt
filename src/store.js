import { createStore, applyMiddleware } from "redux"
import reducers from './reducers'
import logger from 'redux-logger'
// creating store and connecting to the reducers 
export default createStore(reducers, applyMiddleware(logger))