import React from 'react';
import { REACT_APP_API_BASE_URL } from '../config';


export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => {
  return {
    type: FETCH_CAT_REQUEST,
  }
  
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => {
  return {
    type: FETCH_CAT_SUCCESS,
    cat
  }

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => {
  return {
    type: FETCH_CAT_ERROR,
    error
  }



export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/cat`)
    .then(res => {
      if(!res.ok){
         throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(cat => console.log(cat))
    .catch(err => dconsole.log(err));
}