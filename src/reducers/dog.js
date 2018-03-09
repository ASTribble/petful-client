import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR
} from '../actions/dog';

  const dog = {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  };

const initialState = {
  loading: false,
  dog: dog,
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