import React from 'react';
import { CheckBoxContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies(props) {

  const { movies, searchedMovies } = props;

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
        searchedMovies={searchedMovies} >
        {searchedMovies.length > 0 && (filtredMovies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              cardNameRu={movie.nameRU}
              cardDuration={movie.duration}
              cardImage={movie.image.formats.thumbnail.url}
              cardImageName={movie.image.name}
              cardTrailerLink={movie.trailerLink}
              isMovies={true} />
          )
        }))}
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default Movies;