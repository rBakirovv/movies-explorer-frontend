import React from 'react';
import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return (
    <section className='movies-cards-list'>
      <ul className='movies-cards-list__container'>
        {children}
      </ul>
      <button className='movies-cards-list__more-button'>Ещё</button>
    </section>
  )
}

export default MoviesCardList;