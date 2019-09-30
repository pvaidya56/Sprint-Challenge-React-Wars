import React, { useState, useEffect } from 'react';
import Planet from '../Planet'
function StarWarsCard(props) {
  console.log('props', props)
  return (
    <div>
      <h2>{props.person.name}</h2>
      <Planet planet={props.person.homeworld} />
    </div>
  )
}

export default StarWarsCard;