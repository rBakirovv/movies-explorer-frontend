import React, { useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

  const {
    handleLogOut
  } = props;

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleInputChange(e) {
    e.target.name === 'name'
      ? setName(e.target.value)
      : setEmail(e.target.value);
  }

  return (
    <>
      <Header loggedIn={true} />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Руслан!</h2>
        <form className='profile__form'>
          <label className='profile__label' htmlFor='name'>Имя</label>
          <input
            className='profile__input'
            value={name || ' '}
            type='text'
            name='name'
            id='name'
            onChange={handleInputChange} />
          <label className='profile__label' htmlFor='email'>E-mail</label>
          <input
            className='profile__input'
            value={email || ' '}
            type='email'
            id='email'
            onChange={handleInputChange} />
        </form>
        <div className='profile__buttons-container'>
          <button className='profile__account-button' type='button'>Редактировать</button>
          <button
            className='profile__account-button'
            type='button'
            onClick={handleLogOut}>
            Выйти из аккаунта
          </button>
        </div>
        <div className='profile__edit-container'>
          <span className='profile__save-button-span'>При обновлении профиля произошла ошибка.</span>
          <button className='profile__save-button profile__save-button_disabled' type='submit'>Сохранить</button>
        </div>
      </section>
    </>
  );
}

export default Profile;