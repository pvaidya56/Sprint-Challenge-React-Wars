import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Films(props) {
  // console.log('props.film ARRAY OF URLS', props.film)
  const[film, setFilm] = useState();
  useEffect(() => {
    axios
      .get(`${props.film}`)
      .then(data => {
        console.log('FILMS API call result', data.data.title)
        setFilm(data.data.title)
        console.log('film', film)
      })

      .catch(err => {
        console.log('Error:', err)
      })
  }, [])


  return (
    <div>
     <p>Films: {props.film}</p>
    </div>

  )
}

export default Films