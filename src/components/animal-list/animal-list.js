import React from 'react';

export default function AnimalList(props){
  return(
    <dl>
      <dt>{props.animalInfo.name}</dt>
      <dd>sex:  {props.animalInfo.sex}</dd>
      <dd>age:  {props.animalInfo.age}</dd>
      <dd>breed:  {props.animalInfo.breed}</dd>
      <dd>story:  {props.animalInfo.story}</dd>
    </dl> 
  )
}

