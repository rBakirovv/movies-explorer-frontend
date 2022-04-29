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
    </div>
  );
}

export default Header;