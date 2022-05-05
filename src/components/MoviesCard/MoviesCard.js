import React from 'react';
import './MoviesCard.css';
import cardImage from '../../images/photo.png';

function MoviesCard({ isMovies }) {
  return (
    <div className='movies-card'>
      <img className='movies-card__image' src={cardImage} alt='movie' />
      <div className='movies-card__main-container'>
        <div className='movies-card__info-container'>
          <h4 className='movies-card__title'>33 слова о дизайне</h4>
          <p className='movies-card__subtitle'>1ч42м</p>
        </div>
        {isMovies && (
          <button className='movies-card__like-button movies-card__like-button_active'></button>
        )}
        {!isMovies && (
          <button className='movies-card__delete-button'></button>
        )}
      </div>
    </div>
  )
}

export default MoviesCard;