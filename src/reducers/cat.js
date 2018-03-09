import { 
  FETCH_CAT_REQUEST, 
  FETCH_CAT_SUCCESS, 
  FETCH_CAT_ERROR
} from '../actions/cat';

  const cat= {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  };

const initialState = {
  loading: false,
  cat: cat,
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

