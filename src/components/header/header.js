import React from 'react';

export default function Header(props){

  return(
    <header>
      <h1>Adopt a {props.animal}</h1>
      <p> Next Up: {props.animalInfo.name}</p>
      <img src={props.animalInfo.imageURL} alt={props.animalInfo.imageDescription}/>

    </header>  
  )
}

Header.defaultProps = {
  animalInfo: {
    imageURL: 'loading...',
    imageDescription: 'loading...',
    name: 'loading...',
    sex: 'loading...',
    age: 'loading...',
    breed: 'loading...',
    story: 'loading...'
  }
}