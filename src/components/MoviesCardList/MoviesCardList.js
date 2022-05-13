import React from 'react';
import './MoviesCardList.css';

function MoviesCardList(props) {

  const {
    children,
    isMovies,
    isApiError,
    filtredMovies,
    searchedMovies,
    loadMoreMovies,
    currentMovies,
  } = props;

  return (
    <section className='movies-cards-list'>
      {isApiError && (
        <span className='movies-cards-list__error-api'>Во время запроса произошла ошибка</span>
      )}
      <ul className='movies-cards-list__container'>
        {children}
      </ul>
      {isMovies
        && filtredMovies.length > 0
        && searchedMovies.length > 0
        && filtredMovies.length > currentMovies
        && (<button className='movies-cards-list__more-button' onClick={loadMoreMovies}>Ещё</button>)}
    </section>
  )
}

export default MoviesCardList;