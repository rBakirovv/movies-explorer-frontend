import React from 'react';
import './MoviesCardList.css';

function MoviesCardList(props) {

  const {
    children,
    isMovies,
    filtredMovies,
    searchedMovies,
    loadMoreMovies,
  } = props;

  return (
    <section className='movies-cards-list'>
      <ul className='movies-cards-list__container'>
        {children}
      </ul>
      {isMovies
        && filtredMovies.length > 0
        && searchedMovies.length > 0
        && (<button className='movies-cards-list__more-button' onClick={loadMoreMovies}>Ещё</button>)}
    </section>
  )
}

export default MoviesCardList;