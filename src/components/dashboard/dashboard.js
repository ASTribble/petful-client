import React from 'react';
import './dashboard.css';

import Pet from '../pet/pet';

export default function Dashboard(props){

  return(
    <section>
      <h1>Animal Shelter</h1>
      <div className='animal-sections'>
      <Pet animal='cat' animalInfo={props.catToAdopt} onAdoptPet={e=>console.log('cat')}/>
      <Pet animal='dog' animalInfo={props.dogToAdopt} onAdoptPet={e=>console.log('dog')}/>
      </div>
    </section>
  );
}