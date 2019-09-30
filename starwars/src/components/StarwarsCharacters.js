import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';

function StarWarsCharacters() {
  const [character, setCharacter] = useState([]);
  const [homeworld, setHomeworld] = useState([]);

  useEffect(() => {

    axios
      .get('https://swapi.co/api/people')
      .then(data => {
        console.log('API callresult', data.data.people)
        setCharacter(data.data.results)
      })
      .catch(err => {
        console.log('Error:', err)
      })
  }, [])

  return (
    <div>
      {character.map((character) => {
        return <StarWarsCard person={character}/>
      })}
    </div>

  )
}

export default StarWarsCharacters
