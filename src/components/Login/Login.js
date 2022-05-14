import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login(props) {

  const {
    handleAuthorization,
    setErrorData,
    errorData,
  } = props;

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

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

    setIsValid(target.closest('.login__form').checkValidity());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAuthorization(data);
  };

  useEffect(() => {
    setErrorData('');
  }, [data]);

  console.log(isValid)

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
            className={`login__input ${errors.email && 'login__input_error'}`}
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            required />
          {
            errors.email && (
              <span className='login__error'>{errors.email}</span>
            )
          }
        </label>
        <label className='login__label' htmlFor='email'>
          Пароль
          <input
            className={`login__input ${errors.password && 'login__input_error'}`}
            type='password'
            id='password'
            name='password'
            minLength={2}
            onChange={handleChange}
            required />
          {
            (
              errors.password && (
                <span className='login__error'>{errors.password}</span>
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
          <button type='submit' className={`login__submit ${!isValid && 'login__submit_disabled'}`} disabled={!isValid}>Войти</button>
          <p className='login__submit-subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Login;