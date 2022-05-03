import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='checkbox__container'>
      <input className='checkbox__button' type='checkbox' />
      <label className='checkbox__title'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;