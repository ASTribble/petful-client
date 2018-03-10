import { 
  FETCH_CAT_REQUEST, 
  FETCH_CAT_SUCCESS, 
  FETCH_CAT_ERROR
} from '../actions/cat';

const initialState = {
  loading: false,
  error: null
}

export default function (state=initialState, action) {
  
  if(action.type === FETCH_CAT_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: false
    });
  }

  else if(action.type === FETCH_CAT_SUCCESS){
    return Object.assign({}, state, {
      loading: false,
      cat: action.cat,
      error: false
    });
  }

  else if(action.type === FETCH_CAT_ERROR){
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } 

  return state;
}

