import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <a href='https://rbakirovv.github.io/how-to-learn/' target='_blank' rel='noopener noreferrer' className='portfolio__project-container'>
        <p className='portfolio__project-title'>Статичный сайт</p>
        <div className='portfolio__link'></div>
      </a>
      <a href='https://rbakirovv.github.io/russian-travel/' target='_blank' rel='noopener noreferrer' className='portfolio__project-container'>
        <p className='portfolio__project-title'>Адаптивный сайт</p>
        <div className='portfolio__link'></div>
      </a>
      <a href='https://bakirov.students.nomoredomains.work/' target='_blank' rel='noopener noreferrer' className='portfolio__project-container'>
        <p className='portfolio__project-title'>Одностраничное приложение</p>
        <div className='portfolio__link'></div>
      </a>
    </section>
  );
}

export default Portfolio;