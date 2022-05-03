import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <input
          type='search'
          className='search__input'
          placeholder='Фильм' />
        <button type='submit' className='search__submit'>Найти</button>
      </form>
    </section>
  )
}

export default SearchForm;