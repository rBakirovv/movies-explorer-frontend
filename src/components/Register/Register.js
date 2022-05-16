import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { REGEX_EMAIL, REGEX_NAME } from '../../utils/constants';

function Register(props) {

  const {
    handleRegistration,
    setErrorData,
    errorData,
  } = props;

  const [isDisabled, setIsDisabled] = useState(true);

  const [isNameValid, setIsNameValid] = useState(true);
  const [nameMessage, setNameMessage] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailMessage, setEmailMessage] = useState('');

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState('');

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    validateAll();
    validateName();
    validateEmail();
    validatePassword();
  }, [data.name, data.email, data.password]);

  function validateName() {
    if (data.name && !REGEX_NAME.test(String(data.name).toLowerCase())) {
      setNameMessage('Имя может состоять только из русских или латинских букв.');
      setIsNameValid(false);
      setIsDisabled(true);
      if (data.name.length < 2) {
        return setNameMessage('Минимальная длина: 2 символа.');
      } else if (data.name.length > 30) {
        return setNameMessage('Максимальная длина: 30 символов.');
      }
    } else {
      setIsNameValid(true);
    };
  }

  function validateEmail() {
    if (data.email && !REGEX_EMAIL.test(String(data.email).toLowerCase())) {
      setEmailMessage('E-mail должен содержать "@" и иметь разделяющую точку перед именем домена верхнего уровня.');
      setIsEmailValid(false);
      setIsDisabled(true);
      if (data.email && (data.email.length < 2)) {
        return setEmailMessage('Минимальная длина: 2 символа.');
      }
    } else {
      setIsEmailValid(true);
    };
  };

  function validatePassword() {
    if (data.password && (data.password.length < 2)) {
      setPasswordMessage('Минимальная длина: 2 символа.');
      setIsPasswordValid(false);
      setIsDisabled(true);
    } else {
      setIsPasswordValid(true);
    };
  };

  function validateAll() {
    if (isNameValid && isEmailValid && isPasswordValid) {
      if (data.name.length != 0 && data.email.length != 0 && data.password.length > 1) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration(data);
  };

  useEffect(() => {
    setErrorData('');
  }, [data]);

  return (
    <section className='register'>
      <div></div>
      <Link className='register__logo-link' to='/'>
        <div className='register__logo'></div>
      </Link>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit} noValidate>
        <label className='register__label' htmlFor='name'>
          Имя
          <input
            className={`register__input ${!isNameValid && 'register__input_error'}`}
            type='name'
            id='name'
            name='name'
            onChange={handleChange}
            required
          />
          {
            !isNameValid && (
              <span className='register__error'>{nameMessage}</span>
            )
          }
        </label>
        <label className='register__label' htmlFor='email'>
          E-mail
          <input
            className={`register__input ${!isEmailValid && 'register__input_error'}`}
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            required />
          {
            !isEmailValid && (
              <span className='register__error'>{emailMessage}</span>
            )
          }
        </label>
        <label className='register__label' htmlFor='email'>
          Пароль
          <input
            className={`register__input ${!isPasswordValid && 'register__input_error'}`}
            type='password'
            id='password'
            name='password'
            minLength={2}
            onChange={handleChange}
            required />
          {
            !isPasswordValid && (
              <span className='register__error'>{passwordMessage}</span>
            )
          }
        </label>
        <div className='register__auth-container'>
          {
            errorData === 400 && (
              <span className='register__submit-span'>При регистрации пользователя произошла ошибка.</span>
            )
          }
          {
            errorData === 409 && (
              <span className='register__submit-span'>Пользователь с таким email уже существует.</span>
            )
          }
          {
            errorData === 500 && (
              <span className='register__submit-span'>На сервере произошла ошибка.</span>
            )
          }
          <button type='submit' className={`register__submit ${isDisabled && 'register__submit_disabled'}`} disabled={isDisabled}>Зарегистрироваться</button>
          <p className='register__submit-subtitle'>Уже зарегистрированы? <Link to='/signin' className='login__link'>Войти</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Register;