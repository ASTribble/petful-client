import React from 'react';
import AnimalSection from '../animal-section/animal-section';

export default function Dashboard(props){

  return(
    <page>
      <h1>Animal Shelter</h1>
      <div>
      <AnimalSection animal='cat' animalInfo={props.catToAdopt}/>
      <AnimalSection animal='dog' animalInfo={props.dogToAdopt}/>
      </div>
    </page>
  );
}