import React, { useEffect, useState } from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

  const {
    cardId,
    cardImage,
    cardNameRu,
    cardDuration,
    cardTrailerLink,
    handleLikeMovie,
    handleMovieDelete,
    isMovies,
    savedMovies,
  } = props;

  const [isLiked, setIsLiked] = useState(false);

  function saveMovie() {
    handleLikeMovie(
      {
        duration: cardDuration,
        url: cardImage,
        trailerLink: cardTrailerLink,
        nameRU: cardNameRu,
        id: cardId,
      }
    )
  }

  function deleteMovie() {
    handleMovieDelete(
      {
        _id: cardId,
      }
    )
  }


  isMovies && (
    useEffect(() => {
      const savedMoviesId = savedMovies.map((movie) => { return movie.movieId })
      if (savedMoviesId.includes(cardId)) {
        setIsLiked(true)
      }
    }, [savedMovies])
  )


  const BASE_MOVIES_URL = 'https://api.nomoreparties.co/'

  const cardHours = (parseInt(cardDuration / 60));
  const cardMinutes = cardDuration % 60;

  return (
    <div className='movies-card'>
      <a href={cardTrailerLink} target='_blank' rel='noopener noreferrer'>
        {isMovies && (
          <img
            className='movies-card__image'
            src={`${BASE_MOVIES_URL}${cardImage}`}
            alt={cardNameRu} />
        )}
        {!isMovies && (
          <img
            className='movies-card__image'
            src={cardImage}
            alt={cardNameRu} />
        )}
      </a>
      <div className='movies-card__main-container'>
        <div className='movies-card__info-container'>
          <h4 className='movies-card__title'>{cardNameRu}</h4>
          <p className='movies-card__subtitle'>{cardHours > 0 && (`${cardHours}ч`)}{cardMinutes > 0 && (`${cardMinutes}м`)}</p>
        </div>
        {isMovies && (
          <button
            className={`movies-card__like-button ${isLiked && 'movies-card__like-button_active'}`}
            onClick={isLiked ? deleteMovie : saveMovie}></button>
        )}
        {!isMovies && (
          <button className='movies-card__delete-button' onClick={deleteMovie}></button>
        )}
      </div>
    </div>
  )
}

export default MoviesCard;