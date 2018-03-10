import React from 'react';
import AnimalSection from '../animal-section/animal-section';

export default function Pet(props){

  return (
      <AnimalSection 
        animal={props.animal} 
        animalInfo={props.animalInfo} 
        onAdoptPet={props.onAdoptPet}
      />
  ) ;
}

Pet.defaultProps = {
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
