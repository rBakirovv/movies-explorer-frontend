import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <div className='about-project'>
      <div className='about-project__title-container'>
        <h2 className='about-project__title'>О проекте</h2>
      </div>
      <div className='about-project__stages'>
        <div className='about-project__stage-container'>
          <h3 className='about-project__stage-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__stage-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__stage-container'>
          <h3 className='about-project__stage-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__stage-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__line'>
        <div className='about-project__line-container'>
          <p className='about-project__line-step'>1 неделя</p>
          <p className='about-project__line-step'>4 недели</p>
        </div>
        <div className='about-project__under-line-container'>
          <p className='about-project__under-line-item'>Back-end</p>
          <p className='about-project__under-line-item'>Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;