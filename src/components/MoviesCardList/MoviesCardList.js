import React from 'react';
import './MoviesCardList.css';

function MoviesCardList({ children, isMovies }) {
  return (
    <section className='movies-cards-list'>
      <ul className='movies-cards-list__container'>
        {children}
      </ul>
      {isMovies && (<button className='movies-cards-list__more-button'>Ещё</button>)}
    </section>
  )
}

export default MoviesCardList;