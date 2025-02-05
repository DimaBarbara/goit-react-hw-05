import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MovieCast = ({movieId}) => {
    const [review, setReview] = useState(null)
    useEffect(() => {
    const apiKey = 'd0ba3b07158e6ff2c3613fa0f654b7e0';
    const url = (`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);;
    axios
      .get(url)
      .then(response => {
        setReview(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]); 
    if (review === null) {
        return <p>Loading...</p>;
    }
 return (
    <div>
      { review.map((rev) => (
          <div key={rev.id}>
              <p>Author: {rev.author}</p>
              <p>{rev.content}</p>
          </div>
        ))}
    </div>
  );
};

export default MovieCast