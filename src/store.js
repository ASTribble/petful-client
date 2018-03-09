import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'react-thunk';

import catReducer from './reducers/cat';
import dogReducer from './reducers/dog';

export default createStore (
  combineReducers({
    cat: catReducer,
    dog: dogReducer
  }),
  applyMiddleware(thunk)
);