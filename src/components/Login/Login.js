import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <section className='login'>
      <div></div>
      <Link className='login__logo-link' to='/'>
        <div className='login__logo'></div>
      </Link>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <label className='login__label' htmlFor='email'>
          E-mail
          <input className='login__input' value='pochta@yandex.ru' type='email' id='email' />
        </label>
        <label className='login__label' htmlFor='email'>
          Пароль
          <input className='login__input login__input_error' value='1234' type='password' id='password' />
          <span className='login__error'>Что-то пошло не так...</span>
        </label>
      </form>
      <div className='login__auth-container'>
        <button type='submit' className='login__submit'>Войти</button>
        <p className='login__submit-subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
      </div>
    </section>
  )
}

export default Login;