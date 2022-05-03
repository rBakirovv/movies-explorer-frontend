import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <>
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default Movies;