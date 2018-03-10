
import { REACT_APP_API_BASE_URL } from '../config';


export const FETCH_CAT_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST,
}); 
  
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
    type: FETCH_CAT_ERROR,
    error
});



export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/api/cat`)
    .then(res => {
      if(!res.ok){
         return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cat => {
      dispatch(fetchCatSuccess(cat));
    })  
    .catch(err => dispatch(fetchCatError(err)));
}

export const adoptCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/api/cat`, { method: 'delete' })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res;
    })
    .then(() => dispatch(fetchCat()))
    .catch(err => dispatch(fetchCatError('error', err)));
};
