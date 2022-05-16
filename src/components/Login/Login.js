import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { REGEX_EMAIL } from '../../utils/constants';

function Login(props) {

  const {
    handleAuthorization,
    setErrorData,
    errorData,
  } = props;

  const [isDisabled, setIsDisabled] = useState(true);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailMessage, setEmailMessage] = useState('');

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState('');

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    validateAll();
    validateEmail();
    validatePassword();
  }, [data.name, data.email, data.password]);

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
    if (isPasswordValid && isEmailValid) {
      if (data.email.length != 0 && data.password.length > 1) {
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
    handleAuthorization(data);
  };

  useEffect(() => {
    setErrorData('');
  }, [data]);

  return (
    <section className='login'>
      <div></div>
      <Link className='login__logo-link' to='/'>
        <div className='login__logo'></div>
      </Link>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit} noValidate>
        <label className='login__label' htmlFor='email'>
          E-mail
          <input
            className={`login__input ${!isEmailValid && 'login__input_error'}`}
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            required />
          {
            !isEmailValid && (
              <span className='login__error'>{emailMessage}</span>
            )
          }
        </label>
        <label className='login__label' htmlFor='email'>
          Пароль
          <input
            className={`login__input ${!isPasswordValid && 'login__input_error'}`}
            type='password'
            id='password'
            name='password'
            minLength={2}
            onChange={handleChange}
            required />
          {
            !isPasswordValid && (
              (
                <span className='login__error'>{passwordMessage}</span>
              )
            )
          }
        </label>
        <div className='login__auth-container'>
          {
            (errorData === 400 || errorData === 401) && (
              <span className='login__submit-span'>Вы ввели неправильный логин или пароль.</span>
            )
          }
          {
            errorData === 500 && (
              <span className='login__submit-span'>На сервере произошла ошибка.</span>
            )
          }
          <button type='submit' className={`login__submit ${isDisabled && 'login__submit_disabled'}`} disabled={isDisabled}>Войти</button>
          <p className='login__submit-subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Login;