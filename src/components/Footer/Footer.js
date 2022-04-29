import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__title-container'>
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      </div>
      <div className='footer__main-container'>
        <p className="footer__author">© {new Date().getFullYear()}</p>
        <ul className='footer__link-list'>
          <li><a className='footer__link-item' href='https://praktikum.yandex.ru/profile/web/' target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</a></li>
          <li><a className='footer__link-item' href='https://github.com/rBakirovv' target='_blank' rel='noopener noreferrer'>Github</a></li>
          <li><a className='footer__link-item' href='https://t.me/rBakirovv' target='_blank' rel='noopener noreferrer'>Telegram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;