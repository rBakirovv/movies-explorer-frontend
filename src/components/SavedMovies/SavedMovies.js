import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {

  const { SavedMovies } = props;
  return (
    <>
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList>

      </MoviesCardList>
      <Footer />
    </>
  )
}

export default SavedMovies;