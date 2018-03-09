import React from 'react';

import Header from '../header/header';
import AnimalList from '../animal-list/animal-list';

export default function AnimalSection(props){

  return(
    <section className='animal-section'>

        <Header animal={props.animal} animalInfo={props.animalInfo}/>
       
        <main>
          <AnimalList animal={props.animal} animalInfo={props.animalInfo}/>
         
          <button className='adopt' id={props.animal} onclick={e =>console.log(e.target.id)}>
          Adopt Me!
          </button> 
      </main> 

    </section>
  )
}