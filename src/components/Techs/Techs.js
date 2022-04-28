import React from 'react';
import './Techs.css'

function Techs() {
  return (
    <div className='techs'>
      <div className='techs__title-container'>
        <h2 className='techs__title'>Технологии</h2>
      </div>
      <h2 className='techs__main-title'>7 технологий</h2>
      <p className='techs__main-subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        <li className='techs__list-item'>HTML</li>
        <li className='techs__list-item'>CSS</li>
        <li className='techs__list-item'>JS</li>
        <li className='techs__list-item'>React</li>
        <li className='techs__list-item'>Git</li>
        <li className='techs__list-item'>Git</li>
        <li className='techs__list-item'>mongoDB</li>
      </ul>
    </div>
  );
}

export default Techs;