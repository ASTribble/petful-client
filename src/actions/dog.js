
import { REACT_APP_API_BASE_URL } from '../config';


export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST,
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
    type: FETCH_DOG_ERROR,
    error
});



export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/api/dog`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(err => dispatch(fetchDogError(err)));
};

export const adoptDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/api/dog`, {method: 'delete'})
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res;
    })
    .then(()=> dispatch(fetchDog()))
    .catch(err => dispatch(fetchDogError(err)));
};