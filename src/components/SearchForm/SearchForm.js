import React, { useState } from 'react';
import { CurrentSearchedFilmContext } from '../../contexts/CurrentUserContext';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {

  const setSearchedMovies = React.useContext(CurrentSearchedFilmContext);

  const [movie, setMovie] = useState('');

  function handleInputChange(e) {
    setMovie(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchedMovies(movie);
  };

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__form-container'>
          <input
            type='search'
            className='search__input'
            placeholder='Фильм'
            required
            formNoValidate
            onChange={handleInputChange} />
          <button type='submit' className='search__submit'>Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;