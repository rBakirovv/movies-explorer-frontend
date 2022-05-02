import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <section className='login'>
      <Link to='/'>
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
          <input className='login__input' type='password' id='password' />
        </label>
      </form>
      <button type='submit' className='login__submit'>Войти</button>
      <p className='login__submit-subtitle'>Ещё не зарегистрированы? <Link to='/movies' className='login__link'>Регистрация</Link></p>
    </section>
  )
}

export default Login;