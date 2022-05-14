import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { REGEX_NAME } from '../../utils/constants';

function Register(props) {

  const {
    handleRegistration,
    setErrorData,
    errorData,
  } = props;

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const [isNameValid, setIsNameValid] = useState(true);
  const [nameMessage, setNameMessage] = useState('');

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    validateName();
  }, [data.name]);

  function validateName() {
    if (data.name && !REGEX_NAME.test(String(data.name).toLowerCase())) {
      setNameMessage('Имя введено неккоректно');
      setIsNameValid(false);
      setIsValid(false);
    } else {
      setIsNameValid(true);
    }
  }

  const resetForm = useCallback(
    (newData = {}, newErrors = {}, newIsValid = false) => {
      setData(newData);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setData, setErrors, setIsValid]
  )

  const handleChange = (evt) => {
    const target = evt.target;
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: target.validationMessage
    });

    setIsValid(target.closest('.register__form').checkValidity());
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
            className={`register__input ${errors.email && 'register__input_error'}`}
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            required />
          {
            errors.email && (
              <span className='register__error'>{errors.email}</span>
            )
          }
        </label>
        <label className='register__label' htmlFor='email'>
          Пароль
          <input
            className={`register__input ${errors.password && 'register__input_error'}`}
            type='password'
            id='password'
            name='password'
            minLength={2}
            onChange={handleChange}
            required />
          {
            errors.password && (
              <span className='register__error'>{errors.password}</span>
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
          <button type='submit' className={`register__submit ${!isValid && 'register__submit_disabled'}`} disabled={!isValid}>Зарегистрироваться</button>
          <p className='register__submit-subtitle'>Уже зарегистрированы? <Link to='/signin' className='login__link'>Войти</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Register;