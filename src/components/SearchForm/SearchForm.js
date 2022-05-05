import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__form-container'>
          <input
            type='search'
            className='search__input'
            placeholder='Фильм'
            required
            formNoValidate />
          <button type='submit' className='search__submit'>Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;