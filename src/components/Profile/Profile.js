import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { REGEX_NAME, REGEX_EMAIL } from '../../utils/constants';

function Profile(props) {

  const {
    handleLogOut,
    handleEditProfile,
    isEditButton,
    isReadOnly,
    handleEdiProfileClick,
    errorData,
    setErrorData,
    setIsEditButton,
    setIsReadOnly,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);

  const [isNameValid, setIsNameValid] = useState(true);
  const [nameMessage, setNameMessage] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailMessage, setEmailMessage] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    setErrorData('');
    setIsReadOnly(true);
    setIsEditButton(false);
  }, [currentUser]);

  useEffect(() => {
    validateAll();
    validateName();
    validateEmail();
  }, [email, name]);

  function validateName() {
    if (!REGEX_NAME.test(String(name).toLowerCase())) {
      setNameMessage('Имя неккоректно');
      setIsNameValid(false);
      setIsDisabled(true);
    } else {
      setIsNameValid(true);

    }
  }

  function validateEmail() {
    if (!REGEX_EMAIL.test(String(email).toLowerCase())) {
      setEmailMessage('E-mail неккоректен');
      setIsEmailValid(false);
      setIsDisabled(true);
    } else {
      setIsEmailValid(true);
    }
  };

  function validateAll() {
    if (email === currentUser.email && name === currentUser.name) {
      setIsDisabled(true)
    } else if ((email !== currentUser.email) || (name !== currentUser.name)) {
      setIsDisabled(false)
    }
  }

  function handleInputChange(e) {
    e.target.name === 'name'
      ? setName(e.target.value)
      : setEmail(e.target.value)
    setIsDisabled(false)
  };

  function handleSubmit(evt) {
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
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' id='form' onSubmit={handleSubmit} noValidate>
          <label className={`profile__label ${!isNameValid && 'profile__label_error'}`} htmlFor='name'>Имя</label>
          <input
            className='profile__input'
            value={name || ' '}
            type='text'
            name='name'
            id='name'
            readOnly={isReadOnly}
            required
            onChange={handleInputChange} />
          {
            (!isNameValid && <span className='profile__input-span'>{nameMessage}</span>)
          }
          <label className={`profile__label ${!isEmailValid && 'profile__label_error'}`} htmlFor='email'>E-mail</label>
          <input
            className='profile__input'
            value={email || ' '}
            type='email'
            name='email'
            readOnly={isReadOnly}
            id='email'
            required
            onChange={handleInputChange} />
          {
            !isEmailValid && (
              <span className='profile__input-span'>{emailMessage}</span>
            )
          }
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
                {
                  errorData === 400 && (
                    <span className='profile__save-button-span'>При обновлении профиля произошла ошибка.</span>
                  )
                }
                {
                  errorData === 409 && (
                    <span className='profile__save-button-span'>Пользователь с таким email уже существует.</span>
                  )
                }
                {
                  errorData === 500 && (
                    <span className='profile__save-button-span'>На сервере произошла ошибка.</span>
                  )
                }
                <button
                  className={`profile__save-button ${isDisabled && 'profile__save-button_disabled'}`}
                  type='submit'
                  disabled={isDisabled}>
                  Сохранить
                </button>
              </div>
            )
          }
        </form>
      </section>
    </>
  );
}

export default Profile;