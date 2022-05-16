import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { CheckBoxSavedMoviesContext } from '../../contexts/CurrentUserContext';
import NotMatch from '../NotMatch/NotMatch';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {

  const {
    savedMovies,
    searchedMovies,
    isLoading,
    serachMovies,
    handleMovieDelete,
    setSearchedSavedMovies,
  } = props;

  const { isShortSavedMovie } = React.useContext(CheckBoxSavedMoviesContext);

  const filtredMovies = savedMovies.filter((movie) => {
    return (
      isShortSavedMovie
        ? movie.nameRU.toLowerCase().includes(searchedMovies.toLowerCase()) && (movie.duration <= 40)
        : movie.nameRU.toLowerCase().includes(searchedMovies.toLowerCase())
    )
  });

  useEffect(() => {
    setSearchedSavedMovies('');
  }, []);

  return (
    <>
      <Header loggedIn={true} />
      <SearchForm serachMovies={serachMovies} />
      {
        searchedMovies.length > 0
        && filtredMovies.length === 0
        && !isLoading
        && (
          <NotMatch />
        )
      }
      <Preloader isLoading={isLoading} />
      <MoviesCardList isLoading={isLoading} >
        {!isLoading && filtredMovies.map((movie) => {
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