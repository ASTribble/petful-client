import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import catReducer from './reducers/cat';
import dogReducer from './reducers/dog';

export default createStore (
  combineReducers({
    cat: catReducer,
    dog: dogReducer
  }),
  applyMiddleware(thunk, logger)
);