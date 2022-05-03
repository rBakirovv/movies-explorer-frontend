import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className='movies-cards-list'>
      <ul className='movies-cards-list__container'>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
      </ul>
      <button className='movies-cards-list__more-button'>Ещё</button>
    </section>
  )
}

export default MoviesCardList;