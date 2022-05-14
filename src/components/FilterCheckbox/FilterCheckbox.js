import React from 'react';
import { useLocation } from 'react-router-dom';
import { CheckBoxContext, CheckBoxSavedMoviesContext } from '../../contexts/CurrentUserContext';
import './FilterCheckbox.css';

function FilterCheckbox() {

  const { isShortMovie, setIsShortMovie } = React.useContext(CheckBoxContext);
  const { isShortSavedMovie, setIsShortSavedMovie } = React.useContext(CheckBoxSavedMoviesContext);

  const currentPath = useLocation();

  function handleCheckbox() {
    currentPath.pathname === '/movies'
      ? setIsShortMovie(!isShortMovie)
      : setIsShortSavedMovie(!isShortSavedMovie)
  }

  return (
    <div className='checkbox__container'>
      <input
        className='checkbox__button'
        type='checkbox'
        checked={
          currentPath.pathname === '/movies'
            ? isShortMovie
            : isShortSavedMovie
        }
        onChange={handleCheckbox} />
      <label className='checkbox__title'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;