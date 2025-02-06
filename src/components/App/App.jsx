import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from '../MovieCast/MovieCast'
import MovieReview from '../MovieReviews/MovieReviews'
import s from './App.module.css'
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const App = () => {
  return (
    <div>
      <div className= {s.div}>
        <nav className={s.nav}>
              <NavLink className={buildLinkClass} to='/'>HomePage</NavLink>
              <NavLink className={buildLinkClass} to='/movies'>MoviesPage </NavLink>
          </nav>
      </div>
          
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReview/> } />
        </Route>
              <Route path='*' element={<NotFoundPage/> } />
          </Routes>
    </div>
  )
}

export default App