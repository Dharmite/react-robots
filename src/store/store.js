import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobotsReducer } from './searchReducer';
import { requestRobotsReducer } from './requestRobotsReducer';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobotsReducer, requestRobotsReducer });

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
