import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({movies}) => {
  return (
      <div >
          {movies.map((movie) => {
              return <div key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                      {movie.title}
                  </Link>
              </div>
          })}
      </div>
  )
}

export default MovieList