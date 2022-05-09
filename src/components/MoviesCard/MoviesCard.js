import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

  const {
    cardImage,
    cardImageName,
    cardNameRu,
    cardNameEn,
    cardDuration,
    cardTrailerLink,
    isMovies,
  } = props;

  const BASE_MOVIES_URL = 'https://api.nomoreparties.co/'

  const cardHours = (parseInt(cardDuration / 60));
  const cardMinutes = cardDuration % 60;

  return (
    <div className='movies-card'>
      <a href={cardTrailerLink} target='_blank' rel='noopener noreferrer'>
        <img
          className='movies-card__image'
          src={`${BASE_MOVIES_URL}${cardImage}`}
          alt={cardImageName} />
      </a>
      <div className='movies-card__main-container'>
        <div className='movies-card__info-container'>
          <h4 className='movies-card__title'>{cardNameRu || cardNameEn}</h4>
          <p className='movies-card__subtitle'>{cardHours > 0 && (`${cardHours}ч`)}{cardMinutes > 0 && (`${cardMinutes}м`)}</p>
        </div>
        {isMovies && (
          <button className='movies-card__like-button'></button>
        )}
        {!isMovies && (
          <button className='movies-card__delete-button'></button>
        )}
      </div>
    </div>
  )
}

export default MoviesCard;