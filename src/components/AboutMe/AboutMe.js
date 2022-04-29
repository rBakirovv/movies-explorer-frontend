import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='about-me'>
      <div className='about-me__title-container'>
        <h2 className='about-me__title'>Студент</h2>
      </div>
      <div className='about-me__main-container'>
        <div className='about-me__description-container'>
          <h2 className='about-me__main-title'>Руслан</h2>
          <p className='about-me__main-subtitle'>Фронтенд-разработчик, 19 лет</p>
          <p className='about-me__description'>
            Я родился в Новом Уренгое, затем перебрался учиться в Санкт-Петербург.
            На этом я не остановлюсь, планирую покорять Москву.
            Недавно меня заинтерисована веб-разработка и запала в душу. Во время учёбы в Яндекс Практикуме, я нашёл свою первую работу.
          </p>
          <ul className='about-me__social-list'>
            <li><a href='https://t.me/rBakirovv' target='_blank' rel='noopener noreferrer' className='about-me__social-item'>Telegram</a></li>
            <li ><a href='https://github.com/rBakirovv' target='_blank' rel='noopener noreferrer' className='about-me__social-item'>Github</a></li>
          </ul>
        </div>
        <div className='about-me__avatar'></div>
      </div>
    </div>
  );
}

export default AboutMe;