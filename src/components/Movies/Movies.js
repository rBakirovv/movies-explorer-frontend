import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies({ movies }) {
  return (
    <>
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList isMovies={true} >
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              cardNameRu={movie.nameRU}
              cardNameEn={movie.nameEN}
              cardDuration={movie.duration}
              cardImage={movie.image.formats.thumbnail.url}
              cardImageName={movie.image.name}
              cardTrailerLink={movie.trailerLink}
              isMovies={true} />
          )
        })}
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default Movies;