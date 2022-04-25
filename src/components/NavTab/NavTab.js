import './NavTab.css';

function NavTab() {
  return (
    <div className='navtab'>
      <div className='navtab__title-container'>
        <h2 className='navtab__title'>О проекте</h2>
      </div>
      <div className='navtab__stages'>
        <div className='navtab__stage-container'>
          <h3 className='navtab__stage-title'>Дипломный проект включал 5 этапов</h3>
          <p className='navtab__stage-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='navtab__stage-container'>
          <h3 className='navtab__stage-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='navtab__stage-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='navtab__line'>
        <div className='navtab__line-container'>
          <p className='navtab__line-step'>1 неделя</p>
          <p className='navtab__line-step'>4 недели</p>
        </div>
        <div className='navtab__under-line-container'>
          <p className='navtab__under-line-item'>Back-end</p>
          <p className='navtab__under-line-item'>Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default NavTab;