import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {

  const { savedMovies, handleMovieDelete } = props;

  return (
    <>
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList>
        {savedMovies.length > 0 && savedMovies.map((movie) => {
          return (
            <MoviesCard
              key={movie._id}
              cardId={movie._id}
              cardNameRu={movie.nameRU}
              cardDuration={movie.duration}
              cardImage={movie.image}
              cardTrailerLink={movie.trailerLink}
              handleMovieDelete={handleMovieDelete} />
          )
        })}
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default SavedMovies;