import React from 'react';
import { CheckBoxContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies(props) {

  const {
    movies,
    savedMovies,
    searchedMovies,
    currentMovies,
    loadMoreMovies,
    handleLikeMovie,
    handleMovieDelete,
  } = props;

  const { isShortMovie } = React.useContext(CheckBoxContext);

  const filtredMovies = movies.filter((movie) => {
    return (
      isShortMovie
        ? movie.nameRU.toLowerCase().includes(searchedMovies.toLowerCase()) && (movie.duration <= 40)
        : movie.nameRU.toLowerCase().includes(searchedMovies.toLowerCase())
    )
  });

  return (
    <>
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList
        isMovies={true}
        filtredMovies={filtredMovies}
        loadMoreMovies={loadMoreMovies}
        searchedMovies={searchedMovies}
        currentMovies={currentMovies} >
        {searchedMovies.length > 0 && (filtredMovies.slice(0, currentMovies).map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              cardId={movie.id}
              cardNameRu={movie.nameRU}
              cardDuration={movie.duration}
              cardImage={movie.image.url}
              cardTrailerLink={movie.trailerLink}
              handleLikeMovie={handleLikeMovie}
              handleMovieDelete={handleMovieDelete}
              savedMovies={savedMovies}
              isMovies={true} />
          )
        }))}
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default Movies;