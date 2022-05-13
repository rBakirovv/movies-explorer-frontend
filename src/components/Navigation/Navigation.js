import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

function Navigation(props) {

  const { isBurgerOpen, setIsBurgerOpen } = props;

  return (
    <section className={`navigation ${isBurgerOpen && 'navigation_active'}`}>
      <div className='navigation__container'>
        <button className='navigation__clouse-button' onClick={() => setIsBurgerOpen(false)}></button>
        <div className='navigation__main-container'>
          <ul className='navigation__links-list'>
            <li><NavLink
              to='/'
              className={({ isActive }) => (
                isActive ? 'navigation__link navigation__link_active' : 'navigation__link'
              )}>Главная</NavLink></li>
            <li><NavLink
              to='/movies' className={({ isActive }) => (
                isActive ? 'navigation__link navigation__link_active' : 'navigation__link'
              )}>Фильмы</NavLink></li>
            <li><NavLink
              to='/saved-movies' className={({ isActive }) => (
                isActive ? 'navigation__link navigation__link_active' : 'navigation__link'
              )}>Сохранённые фильмы</NavLink></li>
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