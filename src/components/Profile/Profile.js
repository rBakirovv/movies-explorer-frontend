import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {

  return (
    <>
      <Header loggedIn={true} />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Руслан!</h2>
        <form className='profile__form'>
          <label className='profile__label' htmlFor='name'>Имя</label>
          <input className='profile__input' value='Руслан' type='text' id='name' />
          <label className='profile__label' htmlFor='email'>E-mail</label>
          <input className='profile__input' value='email@mail.ru' type='email' id='email' />
        </form>
        <div className='profile__buttons-container'>
          <button className='profile__account-button' type='button'>Редактировать</button>
          <button className='profile__account-button' type='button'>Выйти из аккаунта</button>
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