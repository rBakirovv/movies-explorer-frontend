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
  const [savedMovieId, setSavedMovieId] = useState('');

  const cardHours = (parseInt(cardDuration / 60));
  const cardMinutes = cardDuration % 60;

  const BASE_MOVIES_URL = 'https://api.nomoreparties.co/';

  isMovies && (
    useEffect(() => {
      savedMovies.map((movie) => {
        if (movie.movieId == cardId) {
          setSavedMovieId(movie._id)
        }
      })
    }, [savedMovies])
  )

  isMovies && (
    useEffect(() => {
      const savedMoviesMovieId = savedMovies.map((movie) => {
        return movie.movieId
      })
      if (savedMoviesMovieId.includes(cardId)) {
        setIsLiked(true)
      }
    }, [savedMovies])
  )

  function likeMovie() {
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

  function dislikeMovie() {
    handleMovieDelete(
      {
        _id: savedMovieId,
      }
    )
    setIsLiked(false)
  }

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
            onClick={isLiked ? dislikeMovie : likeMovie}></button>
        )}
        {!isMovies && (
          <button className='movies-card__delete-button' onClick={deleteMovie}></button>
        )}
      </div>
    </div>
  )
}

export default MoviesCard;