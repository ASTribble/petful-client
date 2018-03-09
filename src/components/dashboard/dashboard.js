import React from 'react';
import './dashboard.css';


import AnimalSection from '../animal-section/animal-section';

export default function Dashboard(props){

  return(
    <section>
      <h1>Animal Shelter</h1>
      <div className='animal-sections'>
      <AnimalSection animal='cat' animalInfo={props.catToAdopt}/>
      <AnimalSection animal='dog' animalInfo={props.dogToAdopt}/>
      </div>
    </section>
  );
}