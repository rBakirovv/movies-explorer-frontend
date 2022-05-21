import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ serachMovies, searchedMovies }) {

  const [movie, setMovie] = useState(searchedMovies);
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (movie && movie.length !== 0) {
        setValidationError(false)
      }
    }, 500)
  })

  function handleInputChange(e) {
    setMovie(e.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    if (movie === undefined || movie === '') {
      setValidationError(true);
    } else {
      serachMovies(movie);
    }
  };

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <div className={`search__form-container ${validationError && 'search__form-container_error'}`}>
          <input
            type='search'
            className='search__input'
            placeholder='Фильм'
            required
            value={movie || ''}
            onChange={handleInputChange} />
          <button type='submit' className='search__submit'>Найти</button>
        </div>
        {validationError && (
          <span className='search__input_error'>Введите ключевое слово.</span>
        )}
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;