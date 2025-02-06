import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../../components/Navigation/Navigation';
import MovieList from '../../components/MovieList/MovieList';
import s from "./MoviesPage.module.css"

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGJhM2IwNzE1OGU2ZmYyYzM2MTNmYTBmNjU0YjdlMCIsIm5iZiI6MTczODc4ODc3NC40NTcsInN1YiI6IjY3YTNjZmE2NzdiOGNlZDQ1NjY2YzQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S93Rvw_oFlzLEjOXywq3VWujPtWf6KwO_BQz8mC7L8I';
const BASE_URL = 'https://api.themoviedb.org/3';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || ''; 
  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
              query,
              api_key: API_TOKEN,
            },
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          });
          setMovies(response.data.results);
        } catch (error) {
          console.log('Error fetching movies:', error);
        }
      };
      fetchMovies();
    }
  }, [query]); 

  return (
    <div className={s.container}>
      <h1 className={s.title}>Movie Search</h1>
      <Navigation />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;