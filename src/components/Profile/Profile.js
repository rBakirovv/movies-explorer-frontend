import React, { useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

  const {
    handleLogOut,
    handleEditProfile,
    isEditButton,
    isReadOnly,
    handleEdiProfileClick,
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
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEditProfile({
      email: email,
      name: name,
    });
  };

  return (
    <>
      <Header loggedIn={true} />
      <section className='profile'>
        <h2 className='profile__title'>Привет, {name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label' htmlFor='name'>Имя</label>
          <input
            className='profile__input'
            value={name || ' '}
            type='text'
            name='name'
            id='name'
            readOnly={isReadOnly}
            onChange={handleInputChange} />
          <label className='profile__label' htmlFor='email'>E-mail</label>
          <input
            className='profile__input'
            value={email || ' '}
            type='email'
            name='email'
            readOnly={isReadOnly}
            id='email'
            onChange={handleInputChange} />
          {
            !isEditButton && (
              <div className='profile__buttons-container'>
                <button
                  className='profile__account-button'
                  type='button'
                  onClick={handleEdiProfileClick}>
                  Редактировать
                </button>
                <button
                  className='profile__account-button'
                  type='button'
                  onClick={handleLogOut}>
                  Выйти из аккаунта
                </button>
              </div>
            )
          }
          {
            isEditButton && (
              <div className='profile__edit-container'>
                <button className='profile__save-button' type='submit'>Сохранить</button>
              </div>
            )
          }
        </form>
      </section>
    </>
  );
}

export default Profile;