import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <>
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList isMovies={true} >
        <li><MoviesCard isMovies={true} /></li>
        <li><MoviesCard isMovies={true} /></li>
        <li><MoviesCard isMovies={true} /></li>
        <li><MoviesCard isMovies={true} /></li>
        <li><MoviesCard isMovies={true} /></li>
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default Movies;