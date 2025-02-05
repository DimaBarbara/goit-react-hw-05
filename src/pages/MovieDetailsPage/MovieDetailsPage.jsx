import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);
  const [isVisibleCast, setIsVisibleCast] = useState(false)
  const [isVisibleReview, setIsVisibleReview] = useState(false)

  useEffect(() => {
    const apiKey = 'd0ba3b07158e6ff2c3613fa0f654b7e0';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    axios
      .get(url)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]); 

  if (!movieDetails) {
    return <p>Loading...</p>;
  }
  const onCast = () => {
    setIsVisibleCast(!isVisibleCast)
  }
  const onReview = () => {
    setIsVisibleReview(!isVisibleReview)
  }

  return (
    <main>
      
      <div>
        <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <h2>{movieDetails.title}</h2>
      <p>Rating: {movieDetails.vote_average}%</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
        <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
      </div>
      <div>
        <p onClick={onCast}>Additiona Information</p>
        {isVisibleCast && <MovieCast movieId={movieId} /> }
          <p onClick={onReview}>Rewievs</p>
        {isVisibleReview && <MovieReviews movieId={movieId} /> }
          
        
      </div>
    </main>
  );
};

export default MovieDetailsPage;