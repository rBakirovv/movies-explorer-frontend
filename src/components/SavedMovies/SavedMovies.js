import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { CheckBoxContext } from '../../contexts/CurrentUserContext';
import NotMatch from '../NotMatch/NotMatch';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {

  const {
    savedMovies,
    searchedMovies,
    isLoading,
    serachMovies,
    handleMovieDelete,
  } = props;

  const { isShortMovie } = React.useContext(CheckBoxContext);

  const filtredMovies = savedMovies.filter((movie) => {
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
      <MoviesCardList>
        {filtredMovies.map((movie) => {
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