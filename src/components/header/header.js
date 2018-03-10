import React from 'react';
import { REACT_APP_API_BASE_URL } from '../../config';

export default function Header(props){

  return(
    <header>

      <h1>Adopt a {props.animal}</h1>
      
      <p> Next Up: {props.animalInfo.name}</p>

      <img 
        src={`${REACT_APP_API_BASE_URL}/${props.animalInfo.imageURL}`} 
        alt={props.animalInfo.imageDescription}
      />

    </header>  
  )
}

