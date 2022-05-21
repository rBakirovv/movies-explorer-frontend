import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

function Navigation(props) {

  const { isBurgerOpen, setIsBurgerOpen } = props;

  const burgerRef = useRef(null);

  function closePopupByOverlay(e) {
    if (e && e.target === burgerRef.current) {
      setIsBurgerOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', closePopupByOverlay);
    return () => document.removeEventListener('click', closePopupByOverlay);
  }, []);

  return (
    <section ref={burgerRef} className={`navigation ${isBurgerOpen && 'navigation_active'}`}>
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