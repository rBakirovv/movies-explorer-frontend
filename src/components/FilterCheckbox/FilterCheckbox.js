import React from 'react';
import { CheckBoxContext } from '../../contexts/CurrentUserContext';
import './FilterCheckbox.css';

function FilterCheckbox() {

  const { isShortMovie, setIsShortMovie } = React.useContext(CheckBoxContext);

  return (
    <div className='checkbox__container'>
      <input
        className='checkbox__button'
        type='checkbox'
        checked={isShortMovie}
        onChange={() => setIsShortMovie(!isShortMovie)} />
      <label className='checkbox__title'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;