import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

function Header(props) {

  const { loggedIn } = props;

  return (
    <div className='header'>
      <Link to='/'>
        <div className='header__logo'></div>
      </Link>
      {!loggedIn && (
        <div className='header__auth-buttons'>
          <Link to='/signup' className='header__auth-item'>Регистрация</Link>
          <Link to='/signin' className='header__auth-item'>Войти</Link>
        </div>
      )}
      {loggedIn && (
        <div className='header__logged-in-container'>
          <div className='header__logged-in-films'>
            <Link to='/movies' className='header__logged-in-item header__logged-in-item_active'>Фильмы</Link>
            <Link to='/saved-movies' className='header__logged-in-item'>Сохранённые фильмы</Link>
          </div>
          <Link to='/profile' className='header__logged-in-account'>
            Аккаунт
            <div className='header__logged-in-account-icon'></div>
          </Link>
          <button className='header__burger'></button>
        </div>
      )}
    </div>
  );
}

export default Header;