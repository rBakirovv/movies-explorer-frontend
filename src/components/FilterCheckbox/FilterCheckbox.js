import React from 'react';
import { CheckBoxContext } from '../../contexts/CurrentUserContext';
import './FilterCheckbox.css';

function FilterCheckbox() {

  const { isShortMovie, setIsShortMovie } = React.useContext(CheckBoxContext);

  return (
    <div className='checkbox__container'>
      <input onClick={() => setIsShortMovie(!isShortMovie)} className='checkbox__button' type='checkbox' />
      <label className='checkbox__title'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;