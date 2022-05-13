import React from 'react';
import { CheckBoxContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotMatch from '../NotMatch/NotMatch';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function Movies(props) {

  const {
    movies,
    savedMovies,
    searchedMovies,
    currentMovies,
    isLoading,
    isApiError,
    loadMoreMovies,
    handleLikeMovie,
    handleMovieDelete,
    serachMovies,
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
      <SearchForm serachMovies={serachMovies} />
      {
        searchedMovies.length > 0 && filtredMovies.length === 0 && (
          <NotMatch />
        )
      }
      <Preloader isLoading={isLoading} />
      <MoviesCardList
        isMovies={true}
        isApiError={isApiError}
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