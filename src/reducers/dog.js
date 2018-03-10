import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR
} from '../actions/dog';

const initialState = {
  loading: false,
  error: null
}

export default function (state = initialState, action) {

  if (action.type === FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: false
    });
  }

  else if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      dog: action.dog,
      error: false
    });
  }

  else if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  return state;
}