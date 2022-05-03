import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {

  return (
    <section className={`navigation`}>
      <div className='navigation__container'>
        <button className='navigation__clouse-button'></button>
        <div className='navigation__main-container'>
          <ul className='navigation__links-list'>
            <li><Link to='/' className='navigation__link'>Главная</Link></li>
            <li><Link to='/movies' className='navigation__link'>Фильмы</Link></li>
            <li><Link to='/saved-movies' className='navigation__link navigation__link_active'>Сохранённые фильмы</Link></li>
          </ul>
          <Link to='/profile' className='navigation__account-link'>
            Аккаунт
            <div className='navigation__account-icon'></div>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default Navigation;