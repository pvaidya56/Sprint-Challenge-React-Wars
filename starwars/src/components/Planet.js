import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Planet(props) {
  // console.log('planet props', props.planet);
  const [homeworld, setHomeworld] = useState([]);
  useEffect(() => {
    axios
      .get(`${props.planet}`)
      .then(data => {
        // console.log('Planet API callresult', data.data.name)
        setHomeworld(data.data.name)
      })

      .catch(err => {
        console.log('Error:', err)
      })
  }, [])

  return (
  <h3>Home Planet:{homeworld}</h3>
  )
}

export default Planet 