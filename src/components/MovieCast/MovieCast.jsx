import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MovieCast = ({movieId}) => {
    const [cast, setCast] = useState(null)
    useEffect(() => {
    const apiKey = 'd0ba3b07158e6ff2c3613fa0f654b7e0';
    const url = (`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);;
    axios
      .get(url)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]); 
    if (cast === null) {
        return <p>Loading...</p>;
    }
 return (
    <div>
      { cast.map((actor) => (
          <div key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                style={{ width: '100px', height: '150px', objectFit: 'cover' }}
              />
            )}
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </div>
        ))}
    </div>
  );
};

export default MovieCast