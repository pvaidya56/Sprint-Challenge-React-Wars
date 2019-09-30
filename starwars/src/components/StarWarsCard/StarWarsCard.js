import React, { useState, useEffect } from 'react';
import Planet from '../Planet'
import {CharacterCard} from './CardStyles'
import Films from './../Films'

function StarWarsCard(props) {
  console.log('props', props)
  return (
    <CharacterCard>
      <h2>{props.person.name}</h2>
      <div className='card-details'>
        <Planet planet={props.person.homeworld}/>
        <p>Gender: {props.person.gender}</p>
        <p>Height: {props.person.height}</p>
        <p>Hair Color: {props.person.hair_color}</p>
        <Films film={props.person.films} />
      </div>
    </CharacterCard>
  )
}

export default StarWarsCard;